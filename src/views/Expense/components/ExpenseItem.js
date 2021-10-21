import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  const listDate = date.split("-");
  return (
    <Card className="expense-item">
      <ExpenseDate date={listDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}