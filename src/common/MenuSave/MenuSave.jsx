import React from "react";
import favorite from "../../assets/icons/heart.svg";
import sale from "../../assets/icons/sale.svg";
import woman from "../../assets/images/Rectangle 478.png";
import colorImg from "../../assets/images/голубая лагуна.png";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import Cloth from "../Cloth/Cloth";

const MenuSave = () => {
  const dispatch = useDispatch();

  const { lookFavorite, lookBasket } = useSelector((state) => state.stateSlice);

  const { basketList } = useSelector((state) => state.saveDataSlice);
  const { favouriteList } = useSelector((state) => state.saveDataSlice);

  const listFavorite = [
    {
      codeid: 1,
      text: "xXs",
      img: woman,
      colorImg: colorImg,
      title: "Футболка из премиальной ткани с облегающим кроем",
      price: "3 490 ₽",
    },
    {
      codeid: 2,
      text: "xXs",
      img: woman,
      colorImg: colorImg,
      title: "Футболка из премиальной ткани с облегающим кроем",
      price: "3 490 ₽",
    },
  ];

  const lookMyFavorite = () => dispatch(lookFavoriteFN(!lookFavorite));

  const lookMyBasket = () => dispatch(lookBasketFN(!lookBasket));

  return (
    <>
      <div className="blockFavorite">
        <button className="btnAction" onClick={lookMyFavorite}>
          <p>{favouriteList?.length}</p>
          <img src={favorite} alt="favorite" />
        </button>
        {lookFavorite && (
          <ul className="favorite__modal">
            {favouriteList?.length == 0 ? (
              <p className="emptyFavourite">Список избранных пустой</p>
            ) : (
              <>
                {favouriteList?.map((item, index) => (
                  <Cloth item={item} key={index} />
                ))}
              </>
            )}
          </ul>
        )}
      </div>
      <div className="blockFavorite">
        <button className="btnAction" onClick={lookMyBasket}>
          <p>{basketList?.reduce((total, item) => total + item.count, 0)}</p>
          <img src={sale} alt="sale" />
        </button>
        {lookBasket && (
          <ul className="favorite__modal">
            {basketList?.length == 0 ? (
              <p className="emptyFavourite">Список избранных пустой</p>
            ) : (
              <>
                {basketList?.map((item, index) => (
                  <Cloth item={item} key={index} />
                ))}
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default MenuSave;
