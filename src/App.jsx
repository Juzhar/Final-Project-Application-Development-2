import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Search from "./pages/SearchPage";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/FavoriteRecipes";
import PageError from "./pages/404";
import NavigationBar from "./components/NavigationBar";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

function App() {
  return (
    <AuthProvider>
    <FavoritesProvider>
      <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<ProtectedRoute>
                            <FavoriteRecipes />
            </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <NavigationBar />
      </div>
      </BrowserRouter>
    </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;