import React from 'react';

import Customer from './components/Customer';

import USBlogo from './images/usb-logo.svg';
import './styles/main.scss';

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
            <Customer 
              name="Firstname Lastname"
              userName="x1234" 
            >
              Customer
            </Customer>
          {/* Add filtered bank employees do display only bankers */}
        </main>
        <footer>
          <p>&copy; 2021 U.S.Bank</p>
        </footer>
      </div>
    </>
  );
}
