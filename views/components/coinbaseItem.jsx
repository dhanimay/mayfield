import React from 'react'
import sharedUtils from 'shared/utils.js'

const CoinbaseItem = function ({ accounts, expandedInvestments, ...props}) {
  let coinbaseUrl = 'https://www.coinbase.com/'
  let titleElement = null
  const overServiceDescription = () =>  {
    const rect = titleElement.getBoundingClientRect()
    props.overServiceDescription(rect, props.service)
  }

  const toggleInvestmentItem = (investment) => {
    return () => {
      props.toggleInvestmentItem(investment)
    }
  }

  return (
    <div className='service-item'>
      <a className='service-title'
        href={coinbaseUrl}
        ref={component => titleElement = component}
        onMouseEnter={overServiceDescription}
        onMouseLeave={props.hideServiceDescription}
      >{props.service}</a>
    {accounts.map((account, index) => (
      <div key={index} className={`investment-item ${expandedInvestments.includes(account.currency) ? 'expanded' : ''}`}>
        <p className='toggle' onClick={toggleInvestmentItem(account.currency)}>
          <span className='arrow'></span>
          {sharedUtils.fullCurrency[account.currency]}
          ({account.currency})
          <span className='amount'>${account.native_balance.amount}</span>
        </p>
        <div className='investment-details'>
          <p><span>Amount: </span><span>{account.balance.amount}</span></p>
          <p><span>Market price: </span><span>${account.market}</span></p>
        </div>
      </div>
    ))}
    </div>
  )
}

export default CoinbaseItem