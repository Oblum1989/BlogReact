import { Link } from "react-router-dom";
import Navigation from './components/Navigation'
import "./index.css"

export default function NavBar({ isAuthenticated, onLogout }) {
  return(
    <>
      <header>
        <div className="navbar-bar">
          {isAuthenticated && <ul className="navbar-bar__bar">
            <li className="navbar-bar__item"><Link to={`/`}>Home</Link></li>
            <li className="navbar-bar__item"><Link to={`/expenses`}>Expenses</Link></li>
            <li className="navbar-bar__item"><Link to={`/pokemons`}>Pokemons</Link></li>
            <li className="navbar-bar__item"><Link to={`/search`}>Search</Link></li>
            <li className="navbar-bar__item"><Link to={`/goals`}>Goals</Link></li>
            <li className="navbar-bar__item"><Link to={`/age`}>User Age</Link></li>
            <li className="navbar-bar__item"><Link to={`/restaurant`}>Restaurant</Link></li>
            <li className="navbar-bar__item"><Link to={`/quotes`}>Quotes</Link></li>
            <li className="navbar-bar__item"><Link to={`/cart`}>Cart</Link></li>
          </ul>}
          <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout}/>
        </div>
      </header>
    </>
  )
}