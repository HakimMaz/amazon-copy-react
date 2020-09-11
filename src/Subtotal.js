import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {
  const[{totalInBasket,basketCounter},dispatch]=useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basketCounter} items):
                <strong>${totalInBasket}</strong>
                
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>)
          }
          decimalScale={2}
          value={2}
          displayType={"text"}
          prefix={"$"}
        />
        <button>proceed to checkout</button>
      </div>
    )
}

export default Subtotal
