import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import ErrorMessage from "../../components/ErrorMessage"
import Loading from "../../components/Loading"
import PokemonContext from "../../context/pokemons"
import NavBar from "../UI/NavBar"
import PokeStats from "./components/PokeStats"

export default function PokeDetail() {
  const { id } = useParams()
  const { getPokemonDetail, pokemonDetail, isLoading, errorMessage, hasError } = useContext(PokemonContext)
  useEffect(() => {
    getPokemonDetail(id).catch(null)
  }, [])

  if(isLoading) return <Loading title="Cargando pokemon..."/>

  return(
    <NavBar>
      <div>
        {hasError ? <ErrorMessage message={errorMessage} /> : (
          <>
            <h3>Info General</h3>
            <p>{`Nombre: ${pokemonDetail?.name}`}</p>
            <p>{`Peso: ${pokemonDetail?.weight} kg`}</p>
            <p>{`Altura: ${pokemonDetail?.height} cm`}</p>
            <hr />
            <h3>Habilidades</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []}/>
          </>
        )}
      </div>
    </NavBar>
  )
}