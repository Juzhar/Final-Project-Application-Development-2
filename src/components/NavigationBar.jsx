import { Link } from "react-router-dom";
import './NavigationBar.css';
function Navigationbar() {
  return (
    <nav className="navbar">
      <Link to="/">Feed</Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navigationbar;