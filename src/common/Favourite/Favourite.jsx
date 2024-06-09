import React from "react";
import { useDispatch, useSelector } from "react-redux";

import favorite from "../../assets/icons/hart.svg";
import favoriteDisActive from "../../assets/icons/heartGray.svg";
import heartBlack from "../../assets/icons/heart.svg";
import { checkFavourite } from "../../helpers/checkFavourite";
import { addDelProdFavourite } from "../../store/reducers/saveDataSlice";

const Favourite = ({ obj, black }) => {
  ///if black = true то подставляю черную сердечку, else серую сердечку

  const dispatch = useDispatch();

  const { favouriteList } = useSelector((state) => state.saveDataSlice);
  ///// добавление и удалени с избранных

  const changeFavourite = () => dispatch(addDelProdFavourite(obj));

  return (
    <button className="favoriteBtn" onClick={changeFavourite}>
      {checkFavourite(obj, favouriteList) ? (
        <img src={favorite} alt="{}" />
      ) : (
        <img src={black ? heartBlack : favoriteDisActive} alt="{}" />
      )}
    </button>
  );
};

export default Favourite;
