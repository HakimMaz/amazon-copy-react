import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({id,title,price,rating,image}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id: id,
        price: price,
      },
    });
  };

  return (
    <div className="basketitem">
      <img src={image} alt="" className="basketitem_image" />
      <div className="basketitem_info">
        <p className="basketitem_title">{title}</p>
        <p className="basketitem_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="basketitem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button
          onClick={() => removeItemFromBasket()}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
