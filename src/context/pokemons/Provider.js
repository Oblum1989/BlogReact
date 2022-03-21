import { useReducer, useState } from "react";
import apiCall from "../../api";
import PokemonContext from "./index";

const defaultCarState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCarState;
  }
  return defaultCarState;
};

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [token, setToken] = useState(null)
  const [carState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCarState
  );

  const userIsLoggedIn = !!token

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
      });
      return setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
      setErrorMessage("Algo ha pasado, ponte las pilas");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Id es requerido");
    try {
      setIsLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonDetailResult = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      return setPokemonDetail(pokemonDetailResult);
    } catch (error) {
      setPokemonDetail({});
      setErrorMessage("Algo ha pasado, ponte las pilas");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const loginHandler = (email, password) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj2XOz_1moMGZS8odimhmRlvub9x_nbPg",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(response => {
      if (response.ok) {
        localStorage.setItem("isLoggedIn", "1");
        response.json().then(data => {
          setToken(data.idToken)
        })
      }else{
        response.json().then(data => {
          alert(data.error.message);
        })
      }
    })
  };

  const SignupHandler = (email, password) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj2XOz_1moMGZS8odimhmRlvub9x_nbPg",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          setToken(data.idToken)
        })
      }else{
        response.json().then(data => {
          console.log(data);
          alert(data.error.message);
        })
      }
    })
  };
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setToken(null)
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const loginTokenHandler = (token) => {
    setToken(token)
  }

  const logoutTokenHandler = (token) => {
    setToken(null)
  }

  const cartContext = {
    items: carState.items,
    totalAmount: carState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  const authContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginTokenHandler,
    logout: logoutTokenHandler,
  };

  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        setIsLoading,
        errorMessage,
        hasError,
        loginHandler,
        SignupHandler,
        logoutHandler,
        cartContext,
        authContext,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
