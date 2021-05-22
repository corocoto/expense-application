import React from "react";
import './ExpenseItem.css';

const ExpenseItem = (props) => (
  <div className='expense-item' >
      <div>
          May 22th 2021
      </div>
      <div className='expense-item__description'>
          <h2>Car Insurance</h2>
          <div className='expense-item__price'>$294.67</div>
      </div>
  </div>
);

export default ExpenseItem;