import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Search from "./pages/SearchPage";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/FavoriteRecipes";
import PageError from "./pages/404";
import NavigationBar from "./components/NavigationBar";
import { FavoritesProvider } from "./context/FavoritesContext";
import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <NavigationBar />
      </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;