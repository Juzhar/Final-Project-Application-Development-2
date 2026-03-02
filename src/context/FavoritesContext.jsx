import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (meal) => {
    if (!favorites.find((item) => item.idMeal === meal.idMeal)) {
      setFavorites((prev) => [...prev, meal]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) =>
      prev.filter((meal) => meal.idMeal !== id)
    );
  };

  const isFavorite = (id) => {
    return favorites.some((meal) => meal.idMeal === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};