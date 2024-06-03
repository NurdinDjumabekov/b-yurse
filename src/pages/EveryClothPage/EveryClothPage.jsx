import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import women from "../../assets/images/Rectangle 478.png";
import pay1 from "../../assets/images/pay1.png";
import pay2 from "../../assets/images/pay2.png";
import { NavPath } from "../../common/NavPath/NavPath";
import "./style.scss";
import ClothSize from "../../components/SalePage/ClothSize/ClothSize";
import ClothColor from "../../components/SalePage/ClothColor/ClothColor";
import basket from "../../assets/icons/basket.svg";
import heart from "../../assets/icons/heart.svg";
import { Description } from "../../components/EveryClothPage/Description/Description";
import RecomCloth from "../../components/EveryClothPage/RecomCloth/RecomCloth";
import MayBeFavorite from "../../components/EveryClothPage/MayBeFavorite/MayBeFavorite";

const EveryClothPage = () => {
  const params = useParams();

  const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const obj = {
    imgs: [women, women, women, women],
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    descr:
      "Идеальная футболка с облегающим кроем, а также с круглым вырезом, является отличным вариантом для повседневного и уикенд ношения.   Футбола изготовлена ​​из премиального, прохладного, удобного и эластичного хлопка, отделанного качественными строчками из крепких ниток. Ведь, это настоящая классика на все времена.",
  };

  console.log(params, "params");

  const link = [
    "Бестселлер-коллекция",
    "Футболка из премиальной ткани с облегающим кроем",
  ];

  return (
    <div className="everyCloth">
      <div className="container">
        <NavPath list={link} />
        <div className="everyCloth__inner">
          <div className="mainContant">
            <div className="dopImg">
              <div>
                <img src={obj?.imgs?.[0]} alt="" />
              </div>
              <div>
                <img src={obj?.imgs?.[1]} alt="" />
              </div>
              <div>
                <img src={obj?.imgs?.[2]} alt="" />
              </div>
            </div>
            <div className="mainImg">
              <img src={obj?.imgs?.[3]} alt="" />
            </div>
          </div>
          <div className="dopContant">
            <h5>{obj?.title}</h5>
            <p>{obj?.price}</p>
            <div className="blockPay">
              <img src={pay2} alt="pay" />
              <img src={pay1} alt="pay" />
              <span>4 платежа по ~870 ₽</span>
            </div>
            <ClothSize />
            <div className="push"></div>
            <ClothColor />
            <div className="actions">
              <button className="choiceCloth">
                <span>Положить в корзину</span>
                <img src={basket} alt="basket" />
              </button>
              <button className="actionFavorite">
                <img src={heart} alt="heart" />
              </button>
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
