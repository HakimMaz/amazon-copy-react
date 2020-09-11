import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />
        <div className="checkout_title">
          <h2>Your shopping Basket</h2>
          {basket.map(b=>
            <BasketItem key={b.id} index={b.id}/>
          )}
                   
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
