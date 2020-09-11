import React from 'react'
import { useStateValue } from './StateProvider';

function BasketItem(props) {
    const [{basket},dispatch]=useStateValue();
    const removeItemFromBasket =(id)=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            payload:{
                id:id
            }
        })       
    }
    return (
      
        <div className="basketitem">
          <img src="" alt="" className="basketitem_image"/>
          <div className="basketitem_info">
             <h2></h2>
             <p></p>
             <p>rating</p>
             <button onClick={()=>removeItemFromBasket(props.index)}>Remove from Basket</button>
          </div>
            
        </div>
    )
}

export default BasketItem
