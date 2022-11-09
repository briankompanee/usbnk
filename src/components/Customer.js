import React from 'react'

//Create Customer functional component passing props
const Customer = (props) => {
  // Destructure props for easier handling
  const { children, name, userName } = props;
  return (
    <>
    {/* use props.children as header */}
      <h2>{ children }</h2>
      {/* pass customer userName and name props */}
      <div className="customer-info">
        <div>{ userName }</div>
        <div>{ name }</div>
      </div>
    </>
  );
}

export default React.memo(Customer);
