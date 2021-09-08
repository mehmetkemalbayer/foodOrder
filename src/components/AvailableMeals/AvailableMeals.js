import classes from "./AvailableMeals.module.css";
import dummyMeals from "../../store/dummy-meals";
import Card from "../Card/Card";
import MealItem from "../MealItem/MealItem";
const AvailableMeals = () => {
  const meals = dummyMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
