import React from 'react';

import BankEmployee from './components/BankEmployee';
import Customer from './components/Customer';

import USBlogo from './images/usb-logo.svg';
import './styles/main.scss';

/* Using create-react-app the json-loader plugin is installed by default
Import the JSON file */
import userData from "./data/employees.json";

export default function App() {

  // filter employees from /data/employees.json to only display bankers
  // sort bankers by satisfationRating
  const employees = userData.filter(user => user.type === 'banker').sort((a,b) => Number(a.satisfactionRating) - Number(b.satisfactionRating));

  // create functional component to return the current year
  const getCurrentYear = () => {
    return new Date().getFullYear();  
  };

  return (
    <> 
      <div className="App">
        <header>
          <div className="logo-container">
            <img src={ USBlogo } alt="U.S. Bank" />
          </div>
        </header>
        <main>
           {/* Add Customers from Customer component */}
          <Customer 
            name="Firstname Lastname"
            userName="x1234" 
          >
            Customer
          </Customer>
          {/* Add Bankers from Customer componentAdd filtered bank employees do display only bankers */}
          <BankEmployee
            employees={ employees }
          >
            Employees
          </BankEmployee>
        </main>
        <footer>
          {/* Add dynamic date to footer */}
          <p>&copy; { getCurrentYear() } U.S.Bank</p>
        </footer>
      </div>
    </>
  );
}
