import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./PokemonListItem.module.css"

export default function PokemonListItem({ name, url }) {
  const getId = () => url.split("/")[6]
  return (
    <Card className={classes.item}>
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${getId()}`}>Ver detalle</Link>
      </button>
    </Card>
  );
}
