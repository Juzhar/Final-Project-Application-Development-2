import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../services/api";

function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then(setMeal);
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;