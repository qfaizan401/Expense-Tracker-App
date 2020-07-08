import React from 'react';
import { Header,Balance,IncomeExpense,TransectionList,AddTransection } from "./components";
import './App.css';
import {GlobalProvider} from './context/DescriptionAmount'

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpense />
          <TransectionList />
          <AddTransection />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
