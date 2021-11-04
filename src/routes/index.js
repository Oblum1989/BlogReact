import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourOFour from "../views/404";
import Expense from "../views/Expense";
import Pokemons from "../views/Pokemons";
import PokeDetail from "../views/Pokemons/views/PokeDetail";
import Home from "../views/Home";
import Search from "../views/Search";
import Goals from "../views/Goals";
import Age from "../views/Age";
import Login from "../views/Login";
import NavBar from "../views/UI/Navbar";
import { useContext, useEffect } from "react";
import PokemonContext from "../context/pokemons";
import Restaurant from "../views/Restaurant";

export default function Routes() {
  const { isLoggedIn, setIsLoggedIn, loginHandler, logoutHandler } =
    useContext(PokemonContext);

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <NavBar isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogin={loginHandler} />}
        </Route>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
        <Route path="/pokemon/:id">
          <PokeDetail />
        </Route>
        <Route path="/expenses">
          <Expense />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/age">
          <Age />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </Router>
  );
}
