import React from "react";
import Card from '../Card/Card';
import './Expenses.css';
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = ({items}) => {
    debugger;
    return (
        <Card className='expenses'>
            {items.map(({id, ...rest}) =>
                <ExpenseItem key={id} {...rest} />
            )}
        </Card>
    );
};

export default Expenses