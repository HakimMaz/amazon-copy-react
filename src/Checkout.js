import React from "react";
import "./Checkout.css";
function Checkout() {
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
          {/*basket item*/}
          {/*basket item*/}
          {/*basket item*/}
          {/*basket item*/}
        </div>
      </div>
      <div className="checkout_right">
        <h2> the sub Totol will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
