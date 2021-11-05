import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Loading from "../../../../components/Loading";

import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";

const QuoteForm = ({ onAddQuote, isLoading }) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) => {
          "Are you sure you want to leave? Al your entered dat will be lost!";
        }}
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {isLoading && <Loading title="Please wait!" />}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
