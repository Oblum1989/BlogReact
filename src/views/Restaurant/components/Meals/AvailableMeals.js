import { useContext, useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import PokemonContext from "../../../../context/pokemons";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([])
  const {isLoading, setIsLoading} = useContext(PokemonContext)
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch('https://react-blog-6ce8f-default-rtdb.firebaseio.com/meals.json')
      const responseData = await response.json()

      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
    fetchMeals()
  }, [])
  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && <ul>{mealsList}</ul>}
        {isLoading && <Loading title="Loading Please Wait! "/> }
      </Card>
    </section>
  );
}
