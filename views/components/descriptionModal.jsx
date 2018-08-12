import React from 'react'

const DescriptionModal = ({ rect, description }) => {
  let topPadding = 20
  let leftPadding = 15
  const modalStyle = {
    top: `${rect.top + topPadding}px`,
    left: `${rect.left + rect.width + leftPadding}px`
  }
  return (
    <div className='description-modal' style={modalStyle}>
      <div className='point-shadow'></div>
      <div className='point'></div>
      { description }
    </div>
  )
}

export default DescriptionModal