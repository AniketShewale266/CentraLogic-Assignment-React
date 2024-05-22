import React, { useState } from 'react';

function AddExpense({ onAddExpense }) {
  const [expenseName, setIncomeName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleNameChange = (e) => {
    setIncomeName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: new Date().getTime(), 
      name: expenseName,
      amount: parseFloat(expenseAmount)
    };
    onAddExpense(newExpense);
    setIncomeName('');
    setExpenseAmount('');
  };

  return (
    <div className='add-expense'>
      <h2>Add Expense</h2>
      <div className='expense-content'>
        <div className='my-expense'>
          <label>Name</label>
          <input className='name-input' type='text' value={expenseName} onChange={handleNameChange}></input>
        </div>
        <div className='my-expense'>
          <label>Amount</label>
          <input type='number' value={expenseAmount} onChange={handleAmountChange}></input>
        </div>
        <button className='expense-btn' onClick={handleAddExpense}>Add Expense</button>
      </div>
    </div>
  );
}

export default AddExpense;
