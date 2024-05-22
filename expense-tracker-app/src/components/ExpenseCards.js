import React from 'react';
import Cards from './Cards';

function ExpenseCards({ expenses, onDeleteExpense }) {
  return (
    <div className='expense-cards'>
      <h2>Transactions</h2>
      <div className='cards-container'>
        {expenses.map(expense => (
          <Cards 
            key={expense.id} 
            expense={expense} 
            onDelete={onDeleteExpense} 
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseCards;
