import { useEffect, useState } from "react";
import { getDefaultMeals } from "../services/api";
import RecipeCard from "../components/RecipeCard";

function Feed() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDefaultMeals().then((data) => {
      setMeals(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="feed-grid">
      {meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default Feed;