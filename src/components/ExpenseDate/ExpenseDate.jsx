import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className='expense-date'>
            <span className='expense-date__month'>{month}</span>
            <span className='expense-date__year'>{year}</span>
            <span className='expense-date__day'>{day}</span>
        </div>
    );
};

export default ExpenseDate;