import './App.css';
import Expenses from "./components/Expenses/Expenses";
import React, { useRef } from "react";

const App = () => {
  const expenseItems = useRef([
      {
          id: 1,
          date: new Date('2020-08-14'),
          title: 'Car',
          amount: '4000$'
      },
      {
          id: 2,
          date: new Date(),
          title: 'New TX',
          amount: '1000$'
      },
      {
          id: 3,
          date: new Date('2021-03-15'),
          title: 'New Desk',
          amount: '450$'
      },
  ])

  return (
    <div className="App">
        <Expenses items={expenseItems.current} />
    </div>
  );
}

export default App;
