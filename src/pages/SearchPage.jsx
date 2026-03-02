import { useState } from "react";
import { searchMeals } from "../services/api";
import RecipeCard from "../components/RecipeCard";

function Search() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    const results = await searchMeals(query);
    setMeals(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="feed-grid">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Search;