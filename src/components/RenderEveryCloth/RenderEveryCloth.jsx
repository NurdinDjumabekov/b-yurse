import React from "react";
import basket from "../../assets/icons/basket.svg";
import basketBlack from "../../assets/icons/basketBlack.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { everyClothFN } from "../../store/reducers/requestSlice";
import { useDispatch } from "react-redux";

const RenderEveryCloth = ({ item, detailed }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickBtn = () => {
    if (detailed) {
    } else {
      navigate(`/every/${item?.codeid}`);
      dispatch(everyClothFN(item));
    }
    window.scrollTo(0, 0);
  };

  const checkSale = item?.sale; //// есть ли скидка

  return (
    <li className="every">
      <img src={item?.img} alt="img" />
      {checkSale ? (
        <div className="price">
          <i>{item?.price}</i> <b>{item?.price}</b>
        </div>
      ) : (
        <p>{item?.price}</p>
      )}
      <h5>{item?.title}</h5>
      <button
        className={`choiceCloth ${checkSale && "sale"}`}
        onClick={clickBtn}
      >
        <span>Посмотреть ближе</span>
        <img src={checkSale ? basketBlack : basket} alt="basket" />
      </button>
    </li>
  );
};

export default RenderEveryCloth;
