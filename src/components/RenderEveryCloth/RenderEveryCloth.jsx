import React from "react";

///// delete
import basket from "../../assets/icons/basket.svg";
import basketBlack from "../../assets/icons/basketBlack.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { everyClothFN } from "../../store/reducers/requestSlice";
import { useDispatch } from "react-redux";
import "./style.scss";

import Favourite from "../../common/Favourite/Favourite";
import { sarchImg } from "../../helpers/sarchImg";
import DiscountPrice from "../../common/DiscountPrice/DiscountPrice";

const RenderEveryCloth = ({ item }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const clickBtn = () => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${item?.id}`);
      window.location.reload();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/every/${item?.id}`);
      dispatch(everyClothFN(item));
    }
  };

  return (
    <li className="every">
      <Favourite obj={item} />
      <div className="mainImg">
        <img src={sarchImg(item?.photos)?.url} alt="img" />
        <button className="lookDetailed" onClick={clickBtn}>
          Посмотреть
        </button>
      </div>
      <DiscountPrice item={item} />
      <h5>{item?.productName}</h5>
    </li>
  );
};

export default RenderEveryCloth;
