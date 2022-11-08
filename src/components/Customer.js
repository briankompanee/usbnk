import React from 'react'

const Customer = (props) => {
  return (
    <div className="customer-info">
      <span>{ props.userName } </span>
      <span>{ props.userName }</span>
    </div>
  )
}

export default React.memo(Customer);
