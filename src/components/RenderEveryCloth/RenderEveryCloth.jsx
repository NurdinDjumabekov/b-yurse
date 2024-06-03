import React from "react";
import basket from "../../assets/icons/basket.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const RenderEveryCloth = ({ item, index, detailed }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();

  const clickBtn = () => {
    if (detailed) {
    } else {
      navigate(`/every/${index}`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <li className="every">
      <img src={item?.img} alt="img" />
      <p>{item?.price}</p>
      <h5>{item?.title}</h5>
      <button
        className={`choiceCloth ${item?.sale && "sale"}`}
        onClick={clickBtn}
      >
        <span>Посмотреть ближе</span>
        <img src={basket} alt="basket" />
      </button>
    </li>
  );
};

export default RenderEveryCloth;
