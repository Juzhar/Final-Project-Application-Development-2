import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./NavigationBar.css";

function NavigationBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>Cook Inn</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>

        {isAuthenticated && <Link to="/favorites">Favorites</Link>}

        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;