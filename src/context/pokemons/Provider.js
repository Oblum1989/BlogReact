import { useState } from "react";
import apiCall from "../../api";
import PokemonContext from "./index";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("")
      setHasError(false)
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
      });
      return setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
      setErrorMessage("Algo ha pasado, ponte las pilas")
      setHasError(true)
    } finally {
      setIsLoading(false);
    }
  };
  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Id es requerido");
    try {
      setIsLoading(true);
      setErrorMessage("")
      setHasError(false)
      const pokemonDetailResult = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      return setPokemonDetail(pokemonDetailResult);
    } catch (error) {
      setPokemonDetail({});
      setErrorMessage("Algo ha pasado, ponte las pilas")
      setHasError(true)
    } finally {
      setIsLoading(false);
    }
  };
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0')
    setIsLoggedIn(false);
  };
  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        errorMessage,
        hasError,
        isLoggedIn,
        setIsLoggedIn,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
