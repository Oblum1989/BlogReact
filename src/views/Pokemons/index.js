import { useContext, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import NavBar from "../UI/NavBar";
import PokemonList from "./components/PokemonList";

export default function Pokemons() {
  const {getPokemons, pokemons, isLoading, errorMessage, hasError } = useContext(PokemonContext)

  useEffect(() => {
    getPokemons().catch(null)
  }, [])

  if(isLoading) return <Loading title="Cargando pokemon..."/>

  return(
    <NavBar>
      <div>
        {hasError ? <ErrorMessage message={errorMessage}/> : <PokemonList pokemons={pokemons}/>}
      </div>
    </NavBar>
  )
}