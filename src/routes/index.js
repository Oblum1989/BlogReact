import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense, useContext, useEffect } from "react";
import PokemonContext from "../context/pokemons";
import NavBar from "../views/UI/Navbar";
import Loading from "../components/Loading";

const Goals = lazy(() => import("../views/Goals"))
const FourOFour = lazy(() => import("../views/404"))
const Expense = lazy(() => import("../views/Expense"))
const Pokemons = lazy(() => import("../views/Pokemons"))
const PokeDetail = lazy(() => import("../views/Pokemons/views/PokeDetail"))
const Home = lazy(() => import("../views/Home"))
const Search = lazy(() => import("../views/Search"))
const Age = lazy(() => import("../views/Age"))
const Login = lazy(() => import("../views/Login"))
const Restaurant = lazy(() => import("../views/Restaurant"))
const Quotes = lazy(() => import("../views/Quotes"))
const NewQuote = lazy(() => import("../views/Quotes/pages/NewQuote"))
const QuoteDetail = lazy(() => import("../views/Quotes/pages/QuoteDetail"))
const CartShop = lazy(() => import("../views/CartShop"))

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
      <Suspense fallback={
        <Loading title="Loading!"/>
      }>
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
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/cart">
            <CartShop />
          </Route>
          <Route>
            <FourOFour />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
