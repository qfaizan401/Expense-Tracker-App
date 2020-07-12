import React from 'react'
import './App.css'

//Import Components
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransactions } from "./components/AddTransactions";
import { Footer } from "./components/Footer";

const App = () => {
  return(
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransactions />
      </div>
      <Footer />
    </div>
  )
}

export default App