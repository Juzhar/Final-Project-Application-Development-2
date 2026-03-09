import { useState } from "react";
import { searchMeals } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import { sanitizeInput } from "../utils/sanitize";
import "./SearchPage.css";
function Search() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    const sanitizedQuery = sanitizeInput(query);
    const results = await searchMeals(sanitizedQuery);
    setMeals(results);
  };
 
  return (
    <div>
      <form>
      <input type="hidden" name="csrfToken" value="secureRandomToken" />
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </form>
      <div className="feed-grid">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Search;
