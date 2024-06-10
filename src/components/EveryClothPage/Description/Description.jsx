import React from "react";
import "./style.scss";
import { useState } from "react";
import arrowGray from "../../../assets/icons/aroow.svg";
import arrowBlack from "../../../assets/icons/arrowBlack.svg";

export const Description = ({ everyCloth }) => {
  const [type, setType] = useState(true);

  const sex = { 1: "мужской", 2: "женский" };

  return (
    <div className="descriptions">
      <div className="title">
        <div
          className={`title__inner ${type && "activeDescr"}`}
          onClick={() => setType(false)}
        >
          <p>Характеристика</p>
          <img src={type ? arrowGray : arrowBlack} alt=">" />
        </div>
        <div
          className={`title__inner lineTitle  ${!type && "activeDescr"}`}
          onClick={() => setType(true)}
        >
          <p>Краткое описание</p>
          <img src={type ? arrowBlack : arrowGray} alt=">" />
        </div>
      </div>
      <div className="descriptions__main">
        {type ? (
          <p>{everyCloth?.productDetails?.description}</p>
        ) : (
          <div className="moreSescr">
            <div>
              <span>артикул: </span>
              <p>{everyCloth?.productDetails?.articul}</p>
            </div>
            <div>
              <span>пол: </span>
              <p>{sex?.[everyCloth?.genderId]}</p>
            </div>
            <div>
              <span>материал: </span>
              <p>{everyCloth?.productDetails?.material}</p>
            </div>
            <div>
              <span>комплектация: </span>
              <p>{everyCloth?.productDetails?.complect}</p>
            </div>
            <div>
              <span>страна изготовления: </span>
              <p>{everyCloth?.productDetails?.country}</p>
            </div>
            <div>
              <span>маркировка «честный знак»: </span>
              <p>{everyCloth?.productDetails?.marking} имеется</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
