import React from "react";
import basket from "../../assets/icons/basket.svg";
import basketBlack from "../../assets/icons/basketBlack.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { everyClothFN } from "../../store/reducers/requestSlice";
import { useDispatch } from "react-redux";
import "./style.scss";

import Favourite from "../../common/Favourite/Favourite";
import { sarchImg } from "../../helpers/sarchImg";

const RenderEveryCloth = ({ item, detailed }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const clickBtn = () => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${item?.id}`);
      window.location.reload();
      window.scrollTo(0, 0);
    } else {
      navigate(`/every/${item?.id}`);
      dispatch(everyClothFN(item));
    }
  };

  return (
    <li className="every">
      <Favourite obj={item} />
      <img src={sarchImg(item?.photos)?.url} alt="img" />
      <div className="prices">
        {item?.discountActive ? ( //// есть ли скидка
          <div className="price">
            <i>{item?.price} ₽</i> <b>{item?.oldPrice} ₽</b>
          </div>
        ) : (
          <p>{item?.price} ₽</p>
        )}
      </div>
      <h5>{item?.productName}</h5>
      <button
        className={`choiceCloth ${item?.discountActive && "sale"}`}
        onClick={clickBtn}
      >
        <span>Посмотреть ближе</span>
        <img src={item?.discountActive ? basketBlack : basket} alt="basket" />
      </button>
    </li>
  );
};

export default RenderEveryCloth;
