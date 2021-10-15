import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{date[1]}</div>
      <div className="expense-date__year">{date[0]}</div>
      <div className="expense-date__day">{date[2]}</div>
    </div>
  );
}
