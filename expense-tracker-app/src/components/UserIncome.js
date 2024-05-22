import React, { useState } from 'react';
import './expense.css'


function UserIncome({ onIncomeAdd }) {
  const [income, setIncome] = useState('');

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleAddIncome = () => {
    onIncomeAdd(parseInt(income));
    setIncome('');
  };

  return (
    <div className='user-income'>
      <h2>Add Your Income</h2>
      <div className='user-content'>
        <label>Enter Your Income</label>
        <input type='number' value={income} onChange={handleIncomeChange}></input>
      </div>
      <div className='my-button'>
        <button className='btn' onClick={handleAddIncome}>Add Income</button>
      </div>
    </div>
  );
}

export default UserIncome;
