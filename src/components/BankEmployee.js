import React from 'react';

const BankEmployee = (props) => { 
  const { bankers } = props;
  return (
    <>
      {bankers.map(banker => (
        <div key={banker.id} className="bank-employee-info">
          <div>{banker.userName}</div>
          <div>Name: {banker.name}</div>
          <div>Customer Satisfaction Rating: {banker.satisfactionRating}</div>
        </div>
      ))}
    </>
  );
}

export default React.memo(BankEmployee);
