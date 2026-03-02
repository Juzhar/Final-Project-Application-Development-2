import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>No favorite recipes yet.</p>;
  }

  return (
    <div className="feed-grid">
      {favorites.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default Favorites;