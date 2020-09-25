import React,{forwardRef} from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

const BasketItem=forwardRef(({id,title,price,rating,image},ref) =>{
  const [{ basket }, dispatch] = useStateValue();
  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id: id,
      },
    });
  };

  return (
    <div className="basketitem" ref={ref}>
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
)
export default BasketItem;
