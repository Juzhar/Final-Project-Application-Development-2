import { render, screen } from "@testing-library/react";
import RecipeCard from "../components/RecipeCard";
import { BrowserRouter } from "react-router-dom";

const mockMeal = {
  idMeal: "1",
  strMeal: "Test Recipe",
  strMealThumb: "test.jpg",
};

test("renders recipe title", () => {
  render(
    <BrowserRouter>
      <RecipeCard meal={mockMeal} />
    </BrowserRouter>
  );

  expect(screen.getByText(/Test Recipe/i)).toBeInTheDocument();
});