import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem";

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} {...meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
