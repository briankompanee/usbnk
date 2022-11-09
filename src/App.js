import React from 'react';

import BankEmployee from './components/BankEmployee';
import Customer from './components/Customer';

import USBlogo from './images/usb-logo.svg';
import './styles/main.scss';

/* Using create-react-app the json-loader plugin is installed by default
Import the JSON file */
import userData from "./data/employees.json";

export default function App() {
  const bankers = [...userData]

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
          <BankEmployee
           bankers={ bankers }
          > 
          Employees
          </BankEmployee>
        </main>
        <footer>
          <p>&copy; 2021 U.S.Bank</p>
        </footer>
      </div>
    </>
  );
}
