import React from 'react';
import { Header,Balance,IncomeExpense,TransectionList,AddTransection } from "./components";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransectionList />
        <AddTransection />
      </div>
    </div>
  );
}

export default App;
