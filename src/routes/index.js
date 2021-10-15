import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourOFour from "../views/404";
import Expense from "../views/Expense";
import Pokemons from "../views/Pokemons";
import PokeDetail from "../views/PokeDetail";
import Home from "../views/Home";
import Search from "../views/Search";
import Goals from "../views/Goals";

export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pokemons" >
          <Pokemons />
        </Route>
        <Route path="/pokemon/:id" >
          <PokeDetail />
        </Route>
        <Route path="/expenses" >
          <Expense />
        </Route>
        <Route path="/search" >
          <Search />
        </Route>
        <Route path="/goals" >
          <Goals />
        </Route>
        <Route>
          <FourOFour/>
        </Route>
      </Switch>
    </Router>
  )
}