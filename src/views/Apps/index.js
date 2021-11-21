import { Link } from "react-router-dom";

export default function Apps(params) {
  return(
    <div className='centered'>
      <ul>
        <li className="navbar-bar__item"><Link to={`/search`}>Search</Link></li>
        <li className="navbar-bar__item"><Link to={`/goals`}>Goals</Link></li>
        <li className="navbar-bar__item"><Link to={`/age`}>User Age</Link></li>
        <li className="navbar-bar__item"><Link to={`/quotes`}>Quotes</Link></li>
      </ul>
    </div>
  )
}