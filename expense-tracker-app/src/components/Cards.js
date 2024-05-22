import React from 'react';

function Cards({ expense, onDelete }) {
  const handleDelete = () => {
    onDelete(expense.id);
  };

  return (
    <div className='my-card'>
      <h4>Expense Name: {expense.name}</h4>
      <h4>Price: {expense.amount}</h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Cards;
