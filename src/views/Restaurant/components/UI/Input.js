import classes from "./Input.module.css";

export default function Input({ className, input, label }) {
  return(
    <div className={`${className} ${classes.input}`}>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} {...input}/>
    </div>
  )
}
