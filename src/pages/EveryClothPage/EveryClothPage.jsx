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

//////////fns
import { addProdBasket } from "../../store/reducers/saveDataSlice";

/////////tags
import basket from "../../assets/icons/basket.svg";
import favorite from "../../assets/icons/heart.svg";
import pay1 from "../../assets/images/pay1.png";
import pay2 from "../../assets/images/pay2.png";
import Favourite from "../../common/Favourite/Favourite";

const EveryClothPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;

  const { everyCloth } = useSelector((state) => state.requestSlice);

  const addBasket = () => {
    dispatch(addProdBasket(everyCloth));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const link = ["Бестселлер-коллекция", everyCloth?.title];

  const checkSale = everyCloth?.sale; //// есть ли скидка

  return (
    <div className="everyCloth">
      <div className="container">
        <NavPath list={link} />
        <div className="everyCloth__inner">
          <div className="mainContant">
            <div className="dopImg">
              <div>
                <img src={everyCloth?.img} alt="" />
              </div>
              <div>
                <img src={everyCloth?.img} alt="" />
              </div>
              <div>
                <img src={everyCloth?.img} alt="" />
              </div>
            </div>
            <div className="mainImg">
              <img src={everyCloth?.img} alt="" />
            </div>
          </div>
          <div className="dopContant">
            <h5>{everyCloth?.title}</h5>
            <div className="prices">
              {checkSale ? (
                <div className="price">
                  <i>{everyCloth?.price}</i> <b>{everyCloth?.price}</b>
                </div>
              ) : (
                <p>{everyCloth?.price}</p>
              )}
            </div>
            <div className="blockPay">
              <img src={pay2} alt="pay" />
              <img src={pay1} alt="pay" />
              <span>4 платежа по ~870 ₽</span>
            </div>
            <ClothSize />
            <div className="push"></div>
            <ClothColor />
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
