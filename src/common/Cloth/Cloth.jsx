import React from "react";
import basket from "../../assets/icons/basket.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import { sarchImg } from "../../helpers/sarchImg";
import Favourite from "../Favourite/Favourite";

const Cloth = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nav = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    navigate("basket");
  };

  const color = item?.colors?.filter((i) => i.id == item?.activeColorEvery);

  const size = item?.sizes?.filter((i) => i.id == item?.activeSizeEvery);

  return (
    <li>
      <div className="imgMain">
        <img src={sarchImg(item?.photos)?.url} alt="" />
      </div>
      <div className="infoBlock">
        <h5>{item.productName}</h5>
        <p>{item.price} ₽</p>
        <div className="sizes">
          <div className="sizes__inner">
            <span>Размерная сетка</span>
            <b>{size?.[0]?.sizeName}</b>
          </div>
          <div className="sizes__inner">
            <span>Цветовая палитра</span>
            <img src={color?.[0]?.color} alt="" />
          </div>
        </div>
        <div className="actions">
          <button className="choiceCloth" onClick={nav}>
            <span>Посмотреть ближе</span>
            <img src={basket} alt="basket" />
          </button>
          <Favourite obj={item} />
        </div>
      </div>
    </li>
  );
};

export default Cloth;
