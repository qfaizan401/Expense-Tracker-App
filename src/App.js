import React from 'react';
import { Header,Balance,IncomeExpense,TransectionList } from "./components";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransectionList />
      </div>
    </div>
  );
}

export default App;
