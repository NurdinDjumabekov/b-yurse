import React from "react";
import "./style.scss";
import { useState } from "react";
import arrow from "../../../assets/icons/aroow.svg";

export const Description = () => {
  const [type, setType] = useState(true);

  const characteristic =
    "Идеальная футболка с облегающим кроем, а также с круглым вырезом, является отличным вариантом для повседневного и уикенд ношения. Футбола изготовлена ​​из премиального, прохладного, удобного и эластичного хлопка, отделанного качественными строчками из крепких ниток.Ведь, это настоящая классика на все времена. ";

  const description = {
    articul: "1234567890",
    sex: "женский",
    material: "100% хлопок и 95% лайкра",
    complect: "футболка, 1 штука",
    country: "россия",
    marking: "имеется",
  };

  return (
    <div className="descriptions">
      <div className="title">
        <div
          className={`title__inner ${type && "activeDescr"}`}
          onClick={() => setType(true)}
        >
          <p>Характеристика</p>
          <img src={arrow} alt=">" />
        </div>
        <div
          className={`title__inner lineTitle  ${!type && "activeDescr"}`}
          onClick={() => setType(false)}
        >
          <p>Краткое описание</p>
          <img src={arrow} alt=">" />
        </div>
      </div>
      <div className="descriptions__main">
        {type ? (
          <p>{characteristic}</p>
        ) : (
          <div className="moreSescr">
            <div>
              <span>артикул: </span>
              <p>{description?.articul}</p>
            </div>
            <div>
              <span>пол: </span>
              <p>{description?.sex}</p>
            </div>
            <div>
              <span>материал: </span>
              <p>{description?.material}</p>
            </div>
            <div>
              <span>комплектация: </span>
              <p>{description?.complect}</p>
            </div>
            <div>
              <span>страна изготовления: </span>
              <p>{description?.country}</p>
            </div>
            <div>
              <span>маркировка «честный знак»: </span>
              <p>{description?.marking}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
