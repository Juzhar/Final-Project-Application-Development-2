const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getDefaultMeals = async () => {
  const res = await fetch(`${BASE_URL}/search.php?s=chicken`);
  const data = await res.json();
  return data.meals || [];
};

export const searchMeals = async (query) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
};

export const getMealById = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
};