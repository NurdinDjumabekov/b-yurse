import React, { useState } from "react";
import "./style.scss";
import like from "../../../assets/icons/like.svg";
import ClothSize from "../ClothSize/ClothSize";
import ClothMenu from "../ClothMenu/ClothMenu";
import ClothColorPrice from "../ClothColorPrice/ClothColorPrice";

const ClothTypes = () => {
  const [listClothWomen, setListClothWomen] = useState([
    {
      codeid: 1,
      text: "Топики",
      count: 12,
      active: true,
    },
    {
      codeid: 2,
      text: "Толстовки-свитшоты",
      count: 12,
      active: false,
    },
    {
      codeid: 3,
      text: "Толстовки-худи",
      count: 12,
      active: false,
    },
    {
      codeid: 4,
      text: "Бестселлер-коллекция",
      count: 100,
      active: false,
    },
    {
      codeid: 5,
      text: "Нью-коллекция",
      count: 12,
      active: false,
    },
  ]);

  const [listClothMan, setListClothMan] = useState([
    {
      codeid: 1,
      text: "Топики",
      count: 12,
      active: true,
    },
    {
      codeid: 2,
      text: "Толстовки-свитшоты",
      count: 12,
      active: false,
    },
    {
      codeid: 3,
      text: "Толстовки-худи",
      count: 12,
      active: false,
    },
    {
      codeid: 4,
      text: "Бестселлер-коллекция",
      count: 100,
      active: false,
    },
    {
      codeid: 5,
      text: "Нью-коллекция",
      count: 12,
      active: false,
    },
  ]);

  const clickListWomen = (codeid) => {
    const newData = listClothWomen.map((item) => ({
      ...item,
      active: item.codeid === codeid, // обновляем только поле active
    }));
    setListClothWomen(newData);
  };

  const clickListMan = (codeid) => {
    const newData = listClothMan?.map((item) => ({
      ...item,
      active: item.codeid === codeid, // обновляем только поле active
    }));
    setListClothMan(newData);
  };

  return (
    <div className="clothTypes">
      <ClothMenu />
      <div className="mainTitle">
        <h3>Женская одежда</h3>
        <img src={like} alt="like" />
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {listClothWomen?.map((item) => (
          <li
            key={item?.codeid}
            className={item?.active ? "activeItem" : ""}
            onClick={() => clickListWomen(item.codeid)}
          >
            <p>{item?.text}</p>
            <span className="count">{item?.count}</span>
          </li>
        ))}
      </ul>
      <div className="mainTitle">
        <h3>Мужская одежда</h3>
        <img src={like} alt="like" />
      </div>
      <div className="line"></div>
      <ul className="listTypes">
        {listClothMan?.map((item) => (
          <li
            key={item?.codeid}
            className={item?.active ? "activeItem" : ""}
            onClick={() => clickListMan(item.codeid)}
          >
            <p>{item?.text}</p>
            <span className="count">{item?.count}</span>
          </li>
        ))}
      </ul>
      <ClothSize />
      <ClothColorPrice />
      <button className="onUp">Подняться наверх</button>
    </div>
  );
};

export default ClothTypes;
