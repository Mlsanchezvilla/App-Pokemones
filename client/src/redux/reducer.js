import { FILTER_CARDS, ORDER_CARDS } from './actions';

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_CARDS:
      if (payload.toUpperCase() === 'ALL') {
        return {
          ...state,
          filteredPokemons: state.allPokemons,
        };
      }
      return {
        ...state,
        filteredPokemons: state.allPokemons.filter(
          pokemon => pokemon.type.toUpperCase() === payload.toUpperCase()
        ),
      };

    case ORDER_CARDS:
      const sortedPokemons = [...state.filteredPokemons].sort((a, b) => {
        if (payload === 'asc') {
          return a.name.localeCompare(b.name);
        } else if (payload === 'desc') {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
      return {
        ...state,
        filteredPokemons: sortedPokemons,
      };

    default:
      return state;
  }
};

export default reducer;