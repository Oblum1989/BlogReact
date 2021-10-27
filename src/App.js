import Routes from './routes';
import PokemonProvider from "./context/pokemons/Provider";

import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
