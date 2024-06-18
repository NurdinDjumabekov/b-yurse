import React from "react";
import "./style.scss";

const DiscountPrice = ({ item }) => {
  return (
    <div className="prices">
      {item?.discountActive ? (
        <div className="price">
          <span>{item?.price} ₽</span>
          <b>
            <i>без скидки: </i>
            {item?.oldPrice} ₽
          </b>
        </div>
      ) : (
        <p>{item?.price} ₽</p>
      )}
    </div>
  );
};

export default DiscountPrice;
