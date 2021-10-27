import { useState } from "react/cjs/react.development";
import ExpenseFilter from "./components/ExpenseFilter";
import NewExpense from "./components/NewExpense";
import ExpenseList from "./components/ExpenseList";
import Card from "./UI/Card";
import "./index.css";
import ExpenseChart from "./components/ExpenseChart";

const EXPENSES_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: "2019-05-24",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: "2021-05-24" },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: "2021-04-24",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: "2021-02-24",
  },
];

export default function Expense() {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.split("-")[0] === filteredYear;
  });

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </>
  );
}
