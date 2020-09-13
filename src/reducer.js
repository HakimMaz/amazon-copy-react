import BasketItem from "./BasketItem";

export const initialState = {
  basket: [],
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
       
      };
    case "REMOVE_FROM_BASKET":
        const index=state.basket.findIndex(
            (basketItem)=> basketItem.id===action.payload.id);
        let newBasket=[...state.basket];
        if(index >=0){
            newBasket.splice(index,1);
        }
        else{
            console.warn(`Cant remove product (id:${action.payload.id}) as its not in the basket`);
        }
        return {
            ...state,            
            basket:newBasket,
           // totalInBasket:state.totalInBasket-action.payload.price,
        }
    default:
        return state;
  }
};
export default reducer;
