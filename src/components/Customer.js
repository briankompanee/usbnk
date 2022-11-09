import React from 'react'

const Customer = (props) => {
  const { children, name, userName } = props;
  return (
    <>
      <h2>{ children }</h2>
      <div className="customer-info">
        <div>{ userName }</div>
        <div>{ name }</div>
      </div>
    </>
  );
}

export default React.memo(Customer);
