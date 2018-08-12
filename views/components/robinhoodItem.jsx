import React from 'react'
import sharedUtils from 'shared/utils.js'

const RobinhoodItem = function ({ accounts: positions, expandedInvestments, ...props}) {
  let robinhoodUrl = 'https://www.robinhood.com/'
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
        href={robinhoodUrl}
        ref={component => titleElement = component}
        onMouseEnter={overServiceDescription}
        onMouseLeave={props.hideServiceDescription}
      >{props.service}</a>
    {positions.map((position, index) => (
      <div key={index} className={`investment-item ${expandedInvestments.includes(position.symbol) ? 'expanded' : ''}`}>
        <p className='toggle' onClick={toggleInvestmentItem(position.symbol)}>
          <span className='arrow'></span>
          {position.name}
          ({position.symbol})
          <span className='amount'>${Number(position.last_trade_price).toFixed(2)}</span>
        </p>
        <div className='investment-details'>
          <p><span>Shares: </span><span>{Number(position.quantity).toFixed(3)}</span></p>
          <p><span>Purchase price: </span><span>${Number(position.average_buy_price).toFixed(2)}</span></p>
        </div>
      </div>
    ))}
    </div>
  )
}

export default RobinhoodItem