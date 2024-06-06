///////////hoooks
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//////////style
import "./style.scss";

/////////components
import { NavPath } from "../../common/NavPath/NavPath";
import ClothSize from "../../components/SalePage/ClothSize/ClothSize";
import ClothColor from "../../components/SalePage/ClothColor/ClothColor";
import RecomCloth from "../../components/EveryClothPage/RecomCloth/RecomCloth";
import { Description } from "../../components/EveryClothPage/Description/Description";
import MayBeFavorite from "../../components/EveryClothPage/MayBeFavorite/MayBeFavorite";
import Favourite from "../../common/Favourite/Favourite";

//////////fns
import { addProdBasket } from "../../store/reducers/saveDataSlice";
import { detailedCloth } from "../../store/reducers/requestSlice";

/////////imgs
import basket from "../../assets/icons/basket.svg";
import pay1 from "../../assets/images/pay1.png";
import pay2 from "../../assets/images/pay2.png";
import { sarchImg, sarchImgSeconds } from "../../helpers/sarchImg";
import {
  activeColorEveryFN,
  activeSizeEveryFN,
} from "../../store/reducers/stateSlice";

const EveryClothPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;

  const { everyCloth } = useSelector((state) => state.requestSlice);
  const { activeColorEvery } = useSelector((state) => state.stateSlice);
  const { activeSizeEvery } = useSelector((state) => state.stateSlice);

  const addBasket = () => {
    if (activeSizeEvery == 0) {
      alert("Выберите размер одежды");
    } else if (activeColorEvery == 0) {
      alert("Выберите цвет одежды");
    } else {
      alert("Товар добавлен в корзину");
      const data = { ...everyCloth, activeColorEvery, activeSizeEvery };
      dispatch(addProdBasket(data));
      clear();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(detailedCloth(id));
    clear();
  }, []);

  const clear = () => {
    dispatch(activeColorEveryFN(0)); ///// обнуляю state для временного хранения цвета
    dispatch(activeSizeEveryFN(0)); ///// обнуляю state для временного хранения размера
  };

  console.log(everyCloth, "everyCloth");

  const link = [
    everyCloth?.brand?.collectionName || "...",
    everyCloth?.category?.categoryName,
  ];

  return (
    <div className="everyCloth">
      <div className="container">
        <NavPath list={link} />
        <div className="everyCloth__inner">
          <div className="mainContant">
            <div className="dopImg">
              {sarchImgSeconds(everyCloth?.photos)?.map((item) => (
                <div key={item?.id}>
                  <img src={item?.url} alt="" />
                </div>
              ))}
            </div>
            <div className="mainImg">
              <img src={sarchImg(everyCloth?.photos)?.url} alt="" />
            </div>
          </div>
          <div className="dopContant">
            <h5>{everyCloth?.productName}</h5>
            <div className="prices">
              {everyCloth?.discountActive ? ( //// есть ли скидка
                <div className="price">
                  <i>{everyCloth?.price} ₽</i> <b>{everyCloth?.oldPrice} ₽</b>
                </div>
              ) : (
                <p>{everyCloth?.price} ₽</p>
              )}
            </div>
            <div className="blockPay">
              <img src={pay2} alt="pay" />
              <img src={pay1} alt="pay" />
              <span>4 платежа по ~870 ₽</span>
            </div>
            <ClothSize choiceEvery={true} listEvery={everyCloth?.sizes} />
            <div className="push"></div>
            <ClothColor choiceEvery={true} listEvery={everyCloth?.colors} />
            <div className="actions">
              <button className="choiceCloth" onClick={addBasket}>
                <span>Положить в корзину</span>
                <img src={basket} alt="basket" />
              </button>
              <Favourite obj={everyCloth} />
            </div>
            <Description />
          </div>
        </div>
        <RecomCloth />
        <MayBeFavorite />
      </div>
    </div>
  );
};

export default EveryClothPage;
