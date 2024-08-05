export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";

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
