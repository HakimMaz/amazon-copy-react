export const initialState = {
  basket: [],
};
const reducer = (state=initialState, action) => {
    console.log("action id ",action)
    console.log("state--->",state)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    
    default:
        return state;
  }
};
export default reducer;
