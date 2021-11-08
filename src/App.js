import Routes from './routes';
import PokemonProvider from "./context/pokemons/Provider";

import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </Provider>
  );
}

export default App;
