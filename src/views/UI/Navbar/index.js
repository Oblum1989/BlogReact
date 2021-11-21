import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./index.css";

export default function NavBar({ isAuthenticated, onLogout }) {
  return (
    <>
      <header>
        <div className="navbar-bar">
          {isAuthenticated && (
            <ul className="navbar-bar__bar">
              <li className="navbar-bar__item">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to={`/expenses`}>Expenses</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to={`/pokemons`}>Pokemons</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to={`/restaurant`}>Restaurant</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to={`/cart`}>Cart</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to={`/favorites`}>Favoritos</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to={`/apps`}>Apps</Link>
              </li>
              <li className="navbar-bar__item">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          )}
          <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
        </div>
      </header>
    </>
  );
}
