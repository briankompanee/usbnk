import React from 'react';

const BankEmployee = (props) => { 
  const { employees, children } = props;
  return (
    <>
      <h2>{ children }</h2>
      { employees.map(employee => (
        <div key={ employee.id } className="bank-employee-info">
          <div>{ employee.userName }</div>
          <div>Name: { employee.name }</div>
          <div>Customer Satisfaction Rating: { employee.satisfactionRating }</div>
        </div>
      )) }
    </>
  );
}

export default React.memo(BankEmployee);
