import React from "react";
import './styles/main.scss'
import USBlogo from './images/usb-logo.svg';

export default function App() {
  return (
    <> 
      <div className="App">
        <header>
          <div className="logo-container">
            <img src={USBlogo} alt="U.S. Bank" />
          </div>
        </header>
        <main>
          {/* Add and debug Customer component */}
          {/* Add filtered bank employees do display only bankers */}
        </main>
        <footer>
          <p>&copy; 2021 U.S.Bank</p>
        </footer>
      </div>
    </>
  );
}
