import React from "react";
import USBlogo from './images/usb-logo.svg';
export default function App() {
  return (
    <>
      <div className="logo-container">
        <img src={USBlogo} alt="U.S. Bank" />
      </div>
      <div>
        {/* Add and debug Customer component */}
        {/* Add filtered bank employees do display only bankers */}
      </div>
      <div>
        <p>&copy; 2021 U.S.Bank</p>
      </div>
    </>
  );
}
