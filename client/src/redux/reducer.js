import {
  FILTER_CARDS,
  ORDER_CARDS,
  FILL_POKEMONS,
  FILL_ORIGINAL_POKEMONS,
  FILTER_BY_SOURCE,
} from "./actions";

const initialState = {
  allPokemons: [],
  originalPokemons: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILL_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
      };
    case FILL_ORIGINAL_POKEMONS:
      return {
        ...state,
        originalPokemons: payload,
      };
    case FILTER_BY_SOURCE:
      console.log(payload, type);
      return {
        ...state,
        allPokemons: state.originalPokemons.filter(
          (pokemon) => pokemon.source === payload.toLowerCase()
        ),
      };
    case FILTER_CARDS:
      console.log(payload, type);

      if (payload.toLowerCase() === "all") {
        return {
          ...state,
          allPokemons: state.originalPokemons,
        };
      }
      return {
        ...state,
        allPokemons: state.originalPokemons.filter((pokemon) =>
          pokemon.types.includes(payload.toLowerCase())
        ),
      };

    case ORDER_CARDS:
      const sortedPokemons = [...state.allPokemons].sort((a, b) => {
        if (payload === "a") {
          return a.name.localeCompare(b.name);
        } else if (payload === "d") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
      return {
        ...state,
        allPokemons: sortedPokemons,
      };

    default:
      return state;
  }
};

export default reducer;
