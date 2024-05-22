import React, { useState } from 'react';
import './App.css';
import ExpenseDetails from './components/ExpenseDetails';
import UserIncome from './components/UserIncome';
import ExpenseCards from './components/ExpenseCards';
import AddExpense from './components/AddExpense';

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleAddIncome = (income) => {
    setTotalIncome(totalIncome + income);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className='container'>
      <h2 className='heading'>Expense Tracker Web App</h2>
      <div className='top-part'>
        <ExpenseDetails income={totalIncome} totalExpenses={totalExpenses} />
        <UserIncome onIncomeAdd={handleAddIncome} />
      </div>
      <div className='bottom-part'>
        <ExpenseCards expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        <AddExpense onAddExpense={handleAddExpense} />
      </div>
    </div>
  );
}

export default App;
