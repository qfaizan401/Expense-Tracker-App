import React from 'react';
import { Header,Balance,IncomeExpense } from "./components";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
