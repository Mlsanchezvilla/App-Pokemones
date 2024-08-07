export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const FILL_POKEMONS = "FILL_POKEMONS";
export const FILL_ORIGINAL_POKEMONS = "FILL_ORIGINAL_POKEMONS";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";

export const filterCards = (type) => {
  return {
    type: FILTER_CARDS,
    payload: type,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};

export const fillPokemons = (payload) => {
  return {
    type: FILL_POKEMONS,
    payload: payload,
  };
};

export const fillOriginalPokemos = (payload) => {
  return {
    type: FILL_ORIGINAL_POKEMONS,
    payload: payload,
  };
};

export const filterBySource = (type) => {
  return {
    type: FILTER_BY_SOURCE,
    payload: type,
  };
};

