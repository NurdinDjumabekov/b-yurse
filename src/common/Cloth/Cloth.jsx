import hart from "../../assets/icons/hart.svg";
import React from "react";
import basket from "../../assets/icons/basket.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";

const Cloth = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nav = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    navigate("basket");
  };

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
          <button className="choiceCloth" onClick={nav}>
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
