import React from 'react';

//Create BankEmployee functional component passing props
const BankEmployee = (props) => {
  // Destructure props for easier handling
  const { employees, children } = props;
  return (
    <>
    {/* use props.children as header */}
      <h2>{ children }</h2>
      {/* map employees and pass individual employee props */}
      { employees.map(employee => (
        /* map requires unique key */
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
