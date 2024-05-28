import React from "react";
import "./style.scss";
import Sorting from "../Sorting/Sorting";
import women from "../../../assets/images/Rectangle 478.png";
import basket from "../../../assets/icons/basket.svg";
import { NavLink } from "react-router-dom";

const ClothList = () => {
  const list = [
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
    {
      img: women,
      price: "3 490 ₽",
      title: "Футболка из премиальной ткани с облегающим кроем",
    },
  ];

  return (
    <div className="clothList">
      <Sorting />
      <ul className="clothList__inner">
        {list?.map((item, index) => (
          <li>
            <img src={item?.img} alt="img" />
            <p>{item?.price}</p>
            <h5>{item?.title}</h5>
            <NavLink className="choiceCloth" to={`/every/${index}`}>
              <span>Посмотреть ближе</span>
              <img src={basket} alt="basket" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothList;
