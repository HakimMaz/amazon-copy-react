export const initialState = {
  basket: [],
  basketCounter:0
};
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
        basketCounter:state.basketCounter+1
      };
    case "REMOVE_FROM_BASKET":
        return {
            ...state,
            basket:state.basket.filter(b=>b.id!==action.payload.id)
        }
    default:
        return state;
  }
};
export default reducer;
