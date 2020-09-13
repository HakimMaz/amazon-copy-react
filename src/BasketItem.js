import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("----", props.item.rating);
  const removeItemFromBasket = (id, price) => {
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
      <img src={props.item.image} alt="" className="basketitem_image" />
      <div className="basketitem_info">
        <p className="basketitem_title">{props.item.title}</p>
        <p className="basketitem_price">
            <small>$</small>
            <strong>{props.item.price}</strong>
        </p>
        <div className="basketitem_rating">
          {Array(props.item.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button
          onClick={() => removeItemFromBasket(props.item.id, props.item.price)}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
