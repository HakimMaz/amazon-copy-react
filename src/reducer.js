export const initialState = {
  basket: [],
  basketCounter:0,
  totalInBasket:0,
};
//get basketTotal usig reduce function
export const getBasketTotal=(basket)=>{
    return basket?.reduce((amount,item)=>
      amount+item.price,0);
};
const reducer = (state=initialState, action) => {
    console.log(" action is :--->",action.type);
  switch (action.type) {    
    case "ADD_TO_BASKET":
        console.log(" glass to be herer  :--->",action.type);
      return {
        ...state,
        basket: [...state.basket, action.payload],
        basketCounter:state.basketCounter+1,
        //totalInBasket:state.totalInBasket+action.payload.price,
      };
    case "REMOVE_FROM_BASKET":
        return {
            ...state,           
            basket:state.basket.filter(b=>b.id!==action.payload.id),
            basketCounter:state.basketCounter-1,
            totalInBasket:state.totalInBasket-action.payload.price,
        }
    default:
        return state;
  }
};
export default reducer;
