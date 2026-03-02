import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import './RecipeCard.css';

function RecipeCard({ meal }) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const favorite = isFavorite(meal.idMeal);

  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>

      <button
        onClick={() =>
          favorite
            ? removeFavorite(meal.idMeal)
            : addFavorite(meal)
        }
      >
        {favorite ? "❤️ Remove" : "🤍 Favorite"}
      </button>

      <Link to={`/recipe/${meal.idMeal}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCard;