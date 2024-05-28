import hart from "../../assets/icons/hart.svg";
import React from "react";
import basket from "../../assets/icons/basket.svg";

const Cloth = ({ item }) => {
  return (
    <li>
      <div className="imgMain">
        <img src={item?.img} alt="" />
      </div>
      <div className="infoBlock">
        <h5>{item.title}</h5>
        <p>{item.price}</p>
        <div className="sizes">
          <div className="sizes__inner">
            <span>Размерная сетка</span>
            <b>{item.text}</b>
          </div>
          <div className="sizes__inner">
            <span>Цветовая палитра</span>
            <img src={item?.colorImg} alt="" />
          </div>
        </div>
        <div className="actions">
          <button className="choiceCloth">
            <span>Посмотреть ближе</span>
            <img src={basket} alt="basket" />
          </button>
          <button className="mySave">
            <img src={hart} alt="hart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Cloth;
