import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar({children}) {
  return(
    <>
      <div className="navbar-bar">
        <ul className="navbar-bar__bar">
          <li className="navbar-bar__item"><Link to={`/`}>Home</Link></li>
          <li className="navbar-bar__item"><Link to={`/expenses`}>Expenses</Link></li>
          <li className="navbar-bar__item"><Link to={`/pokemons`}>Pokemons</Link></li>
          <li className="navbar-bar__item"><Link to={`/search`}>Search</Link></li>
          <li className="navbar-bar__item"><Link to={`/goals`}>Goals</Link></li>
          <li className="navbar-bar__item"><Link to={`/age`}>User Age</Link></li>
        </ul>
      </div>
      {children}
    </>
  )
}