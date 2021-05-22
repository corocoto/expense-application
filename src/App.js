import './App.css';
import Expenses from "./components/Expenses/Expenses";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
function App() {
  return (
    <div className="App">
        <Expenses>
            <ExpenseItem date={new Date()} title='New TV' amount='1000$'/>
        </Expenses>
    </div>
  );
}

export default App;
