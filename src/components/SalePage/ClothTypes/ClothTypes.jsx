import React, { useState } from "react";
import "./style.scss";
import like from "../../../assets/icons/like.svg";
import ClothSize from "../ClothSize/ClothSize";
import ClothPrices from "../ClothPrices/ClothPrices";
import ClothColor from "../ClothColor/ClothColor";
import {
  listAll,
  listClothMan,
  listClothWomen,
} from "../../../helpers/LodalData";
import { useDispatch, useSelector } from "react-redux";
import { activeCategFN } from "../../../store/reducers/stateSlice";

const ClothTypes = () => {
  const dispatch = useDispatch();

  const { activeCateg } = useSelector((state) => state.stateSlice);

  const actionCateg = ({ codeid, type }) => {
    dispatch(activeCategFN({ codeid, type }));
  };

  const onUp = () => {
    window.scrollTo(0, 0);
  };

  console.log(activeCateg, "activeCateg");

  const checkTitle = activeCateg?.type;

  const checkCateg = activeCateg?.codeid;

  return (
    <div className="clothTypes">
      <div className="mainTitle">
        <h3 className={checkTitle == 3 && "activeTitle"}>Премиальная одежда</h3>
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {listAll?.map((item) => (
          <li
            key={item?.codeid}
            className={checkCateg == item.codeid ? "activeItem" : ""}
            onClick={() => actionCateg(item)}
          >
            <p>{item?.text}</p>
          </li>
        ))}
      </ul>
      <div className="mainTitle">
        <h3 className={checkTitle == 1 && "activeTitle"}>Женская одежда</h3>
        <img src={like} alt="like" />
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {listClothWomen?.map((item) => (
          <li
            key={item?.codeid}
            className={checkCateg == item.codeid ? "activeItem" : ""}
            onClick={() => actionCateg(item)}
          >
            <p>{item?.text}</p>
            <span className="count">{item?.count}</span>
          </li>
        ))}
      </ul>
      <div className="mainTitle">
        <h3 className={checkTitle == 2 && "activeTitle"}>Мужская одежда</h3>
        <img src={like} alt="like" />
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {listClothMan?.map((item) => (
          <li
            key={item?.codeid}
            className={checkCateg == item.codeid ? "activeItem" : ""}
            onClick={() => actionCateg(item)}
          >
            <p>{item?.text}</p>
            <span className="count">{item?.count}</span>
          </li>
        ))}
      </ul>
      <ClothSize />
      <ClothColor />
      <ClothPrices />
      <button className="onUp" onClick={onUp}>
        Подняться наверх
      </button>
    </div>
  );
};

export default ClothTypes;
