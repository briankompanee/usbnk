import React from "react";

// 1. filter employees from /data/employees.json to only display bankers
// 2. sort bankers by satisfationRating

const BankEmployee = (props) => {
  return (
    <div className="bank-employee">
      <span>{props.user.userName}</span>
      <br/>
      <span>Name: { props.user.name }</span>
      <br/>
      <span>Customer Satisfaction Rating: {props.user.satisfactionRating}</span>
    </div>
  )

};

export default React.memo(BankEmployee);
