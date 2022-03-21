import PokemonListItem from "./PokemonListItem";
import classes from './PokemonList.module.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className={classes.list}>
      {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>)}
    </div>
  );
}
