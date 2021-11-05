import classes from './NoQuotesFound.module.css';
import { Link } from "react-router-dom";
import Button from "../../../UI/Button";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Button> <Link to={`/new-quote`}>Add a Quote</Link> </Button>
    </div>
  );
};

export default NoQuotesFound;
