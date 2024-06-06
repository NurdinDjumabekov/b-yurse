import React from "react";
import basket from "../../assets/icons/basket.svg";
import basketBlack from "../../assets/icons/basketBlack.svg";
import { useNavigate } from "react-router-dom";
import { everyClothFN } from "../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

import favorite from "../../assets/icons/hart.svg";
import favoriteDisActive from "../../assets/icons/heartGray.svg";
import { addDelProdFavourite } from "../../store/reducers/saveDataSlice";

/////////// helpers
import { checkFavourite } from "../../helpers/checkFavourite";
import Favourite from "../../common/Favourite/Favourite";

const RenderEveryCloth = ({ item, detailed }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favouriteList } = useSelector((state) => state.saveDataSlice);

  const clickBtn = () => {
    if (detailed) {
    } else {
      navigate(`/every/${item?.codeid}`);
      dispatch(everyClothFN(item));
    }
    window.scrollTo(0, 0);
  };

  const checkSale = item?.sale; //// есть ли скидка

  console.log(favouriteList, "favouriteList");

  return (
    <li className="every">
      {/* <button className="favoriteBtn" onClick={changeFavourite}>
        {checkFavourite(item, favouriteList) ? (
          <img src={favorite} alt="{}" />
        ) : (
          <img src={favoriteDisActive} alt="{}" />
        )}
      </button> */}
      <Favourite obj={item} />
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
