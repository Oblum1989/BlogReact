import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expense.list">
      {items?.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
}
