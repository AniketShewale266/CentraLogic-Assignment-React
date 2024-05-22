import React from 'react';
import './expense.css';

function ExpenseDetails({ income, totalExpenses }) {
  const remainingBalance = income - totalExpenses;
  
  return (
    <div className='expense-details'>
      <h2>Remaining Balance: {remainingBalance}</h2>
      <div className='my-expense'>
        <div className='expense-left'>
          <h3>Total Income</h3>
          <span className='text-center'>{income}</span>
        </div>
        <div className='expense-right'>
          <h3>Total Expenses</h3>
          <span className='text-center'>{totalExpenses}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
