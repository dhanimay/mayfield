import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as utils from 'client/utils.js'
import api from 'client/api'
import CoinbaseItem from 'views/components/coinbaseItem.jsx'
import RobinhoodItem from 'views/components/robinhoodItem.jsx'
import Spinner from 'views/components/spinner.jsx'
import DescriptionModal from 'views/components/descriptionModal.jsx'

const serviceItems = {
  'coinbase': CoinbaseItem,
  'robinhood': RobinhoodItem
}

export default class Dashboard extends Component {
  constructor (props) {
    super(props)

    // let accounts
    // if (__isBrowser__) {
    //   accounts = window.__INITIAL_DATA__
    //   delete window.__INITIAL_DATA__
    // } else {
    //   accounts = props.staticContext.data
    // }

    this.state = {
      accounts: {},
      loading: true,
      serviceDescription: {
        show: false,
        rect: null,
        mouseOver: false,
        delay: 1000,
        service: null
      },
      expandedInvestments: [],
      investmentsTotal: 0
    }

    this.overServiceDescription = this.overServiceDescription.bind(this)
    this.hideServiceDescription = this.hideServiceDescription.bind(this)
    this.toggleInvestmentItem = this.toggleInvestmentItem.bind(this)
  }

  async componentDidMount () {
    let accounts = await api(`/accounts/${this.props.user.id}`)
    console.log(accounts)
    this.coinbaseAddedToTotal(accounts.coinbase)
    this.robinhoodAddedToTotal(accounts.robinhood)
    let newState = Object.assign({}, this.state, {
      accounts,
      loading: false
    })
    this.setState(newState)

    let coinbaseCurrenyPrices = await api(`/coinbase/currency/all/market`)
    this.extendCoinbaseCryptos(coinbaseCurrenyPrices)
  }

  // Find out how to deep clone objects
  overServiceDescription (rect, service) {
    let newState = Object.assign({}, this.state, {
      serviceDescription: {
        mouseOver: true
      }
    })
    this.setState(newState)

    setTimeout(() => {
      if (!this.state.serviceDescription.mouseOver) return
      let newState = Object.assign({}, this.state, {
        serviceDescription: {
          show: true,
          rect,
          service
        }
      })
      this.setState(newState)
    }, this.state.serviceDescription.delay)
  }

  hideServiceDescription () {
    let newState = Object.assign({}, this.state, {
      serviceDescription: {
        show: false,
        rect: null,
        mouseOver: false
      }
    })
    this.setState(newState)
  }

  toggleInvestmentItem (investment) {
    let expandedInvestments = this.state.expandedInvestments.slice()
    utils.arrayInsertOrRemove(expandedInvestments, investment)
    let newState = Object.assign({}, this.state, {
      expandedInvestments
    })
    this.setState(newState)
  }

  coinbaseAddedToTotal (coinbase) {
    let cryptosTotal = 0
    coinbase.forEach(crypto => {
      cryptosTotal += parseInt(crypto.native_balance.amount)
    })
    let newState = Object.assign({}, this.state, {
      investmentsTotal: this.state.investmentsTotal + cryptosTotal
    })
    this.setState(newState)
  }

  robinhoodAddedToTotal (robinhood) {
    let stockTotal = 0
    robinhood.forEach(stock => {
      stockTotal += parseInt(stock.last_trade_price) * parseInt(stock.quantity)
    })
    let newState = Object.assign({}, this.state, {
      investmentsTotal: this.state.investmentsTotal + stockTotal
    })
    this.setState(newState)
  }

  extendCoinbaseCryptos (prices) {
    let cryptos = this.state.accounts.coinbase.slice()
    cryptos.forEach((crypto) => {
      let priceData = prices[crypto.currency]
      if (priceData) crypto.market = priceData.amount
    })
    let newState = Object.assign({}, this.state, {
      accounts: {
        coinbase: cryptos
      },
    })
    this.setState(newState)
  }

  render () {
    let contentClass = ''
    if (this.state.loading) contentClass = 'loading'
    let { user } = this.props

     return (
      <div className='dashboard-view'>
      {this.state.serviceDescription.show ?
        <DescriptionModal
          rect={this.state.serviceDescription.rect}
          description={utils.serviceDescriptions[this.state.serviceDescription.service]}
        />
        : null
      }
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <h2 className='greeting'>Hi {user.first_name}!</h2>
        <div className='accounts'>
          <h3>Accounts</h3>
          <div className={`content ${contentClass}`}>
            {
              this.state.loading ? <Spinner /> : (
              <div>
              <ul>{
                Object.keys(this.state.accounts).map((account, index) => {
                  const Component = serviceItems[account]
                  const accountData = this.state.accounts[account]
                  return <Component
                  key={index}
                  service={account}
                  accounts={accountData}
                  expandedInvestments={this.state.expandedInvestments}
                  overServiceDescription={this.overServiceDescription}
                  hideServiceDescription={this.hideServiceDescription}
                  toggleInvestmentItem={this.toggleInvestmentItem}
                  />
                })
              }</ul>
              <div className='total'>
                <p>
                  <label>Total: </label>
                  <span className='amount'>${this.state.investmentsTotal}</span>
                </p>
              </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
