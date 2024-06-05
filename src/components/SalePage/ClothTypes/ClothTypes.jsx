////hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

////style
import "./style.scss";

////imgs
import like from "../../../assets/icons/like.svg";

/////components
import ClothSize from "../ClothSize/ClothSize";
import ClothPrices from "../ClothPrices/ClothPrices";
import ClothColor from "../ClothColor/ClothColor";

///////fns
import { activeCategFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothTypes = () => {
  const dispatch = useDispatch();

  const { categClothWoman } = useSelector((state) => state.requestSlice);
  const { categClothMan } = useSelector((state) => state.requestSlice);
  const { listBrands } = useSelector((state) => state.requestSlice);

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);

  const actionCateg = ({ id, gender }) => {
    dispatch(activeCategFN({ categId: id, type: gender }));
    const obj1 = { categId: id, type: gender, activeSize };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const onUp = () => {
    window.scrollTo(0, 0);
  };

  const checkTitle = activeCateg?.type;

  const checkCateg = activeCateg?.categId;

  return (
    <div className="clothTypes">
      <div className="mainTitle">
        <h3 className={checkTitle == 3 && "activeTitle"}>Премиальная одежда</h3>
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {listBrands?.map((item) => (
          <li
            key={item?.id}
            className={
              checkCateg == item.id && checkTitle == 3 ? "activeItem" : ""
            }
            onClick={() => actionCateg(item)}
          >
            <p>{item?.collectionName}</p>
          </li>
        ))}
      </ul>
      <div className="mainTitle">
        <h3 className={checkTitle == 2 && "activeTitle"}>Женская одежда</h3>
        <img src={like} alt="like" />
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {categClothWoman?.map((item) => (
          <li
            key={item?.id}
            className={
              checkCateg == item.id && checkTitle == 2 ? "activeItem" : ""
            }
            onClick={() => actionCateg(item)}
          >
            <p>{item?.categoryName}</p>
            <span className="count">{item?.count || 0}</span>
          </li>
        ))}
      </ul>
      <div className="mainTitle">
        <h3 className={checkTitle == 1 && "activeTitle"}>Мужская одежда</h3>
        <img src={like} alt="like" />
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {categClothMan?.map((item) => (
          <li
            key={item?.id}
            className={
              checkCateg == item.id && checkTitle == 1 ? "activeItem" : ""
            }
            onClick={() => actionCateg(item)}
          >
            <p>{item?.categoryName}</p>
            <span className="count">{item?.count || 0}</span>
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
