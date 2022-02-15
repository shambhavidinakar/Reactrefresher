import React from 'react';
import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  return (
    <li className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </li>
  );
}

export default ExpenseItem;
