import React from "react";
import clsx from 'clsx';
import './Card.css'

const Card = ({children, className}) => {
    const classes = clsx('card', className);
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card