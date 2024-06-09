import React from "react";
import favorite from "../../assets/icons/heart.svg";
import favoriteWhite from "../../assets/icons/heartWhite.svg";
import sale from "../../assets/icons/sale.svg";
import saleWhite from "../../assets/icons/saleWhite.svg";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import Cloth from "../Cloth/Cloth";

const MenuSave = () => {
  const dispatch = useDispatch();

  const { lookFavorite, lookBasket } = useSelector((state) => state.stateSlice);

  const { basketList } = useSelector((state) => state.saveDataSlice);
  const { favouriteList } = useSelector((state) => state.saveDataSlice);

  const lookMyFavorite = () => dispatch(lookFavoriteFN(!lookFavorite));

  const lookMyBasket = () => dispatch(lookBasketFN(!lookBasket));

  return (
    <>
      <div className="blockFavorite">
        <button
          className={`btnAction ${lookFavorite && "activeFavorite"}`}
          onClick={lookMyFavorite}
        >
          <p>{favouriteList?.length}</p>
          <img src={lookFavorite ? favoriteWhite : favorite} alt="favorite" />
        </button>
        {lookFavorite && (
          <ul className="favorite__modal">
            {favouriteList?.length == 0 ? (
              <p className="emptyFavourite">Список избранных пустой</p>
            ) : (
              <>
                {favouriteList?.map((item, index) => (
                  <Cloth item={item} key={index} btn={"Положить в корзину"} />
                ))}
              </>
            )}
          </ul>
        )}
      </div>
      <div className="blockFavorite">
        <button
          className={`btnAction ${lookBasket && "activeFavorite"}`}
          onClick={lookMyBasket}
        >
          <p>{basketList?.reduce((total, item) => total + item.count, 0)}</p>
          <img src={lookBasket ? saleWhite : sale} alt="sale" />
        </button>
        {lookBasket && (
          <ul className="favorite__modal">
            {basketList?.length == 0 ? (
              <p className="emptyFavourite">Корзина пустая</p>
            ) : (
              <>
                {basketList?.map((item, index) => (
                  <Cloth item={item} key={index} btn={"Открыть в корзине"} />
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
