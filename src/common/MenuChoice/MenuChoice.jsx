/////// hooks
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

////// style
import "./style.scss";

////// imgs
import menu from "../../assets/icons/menu.svg";
import userCheck from "../../assets/icons/UserCheck.svg";
import user from "../../assets/icons/User.svg";

import { lookMenuFN } from "../../store/reducers/stateSlice";
import { activeBrandsFN, lookNumberFN } from "../../store/reducers/stateSlice";

import { useNavigate } from "react-router-dom";

const MenuChoice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lookMenu, activeBrands } = useSelector((state) => state.stateSlice);

  const { dataUser } = useSelector((state) => state.saveDataSlice);

  // const { listBrands } = useSelector((state) => state.requestSlice);

  const openMenu = () => dispatch(lookMenuFN(true));

  const [secondID, setSecondID] = useState(0);
  const [threeId, setThreeId] = useState(0);

  const secondList = [
    {
      text: "Акция",
      codeid: 1,
    },
    {
      text: "Философия нашей компании",
      codeid: 1,
    },
    {
      text: "Экспансия нашей компании",
      codeid: 2,
    },
    {
      text: "Нью-коллекция",
      codeid: 2,
    },
    {
      text: "Мужская одежда",
      codeid: 3,
    },
  ];

  const threeList = [
    {
      text: "Оплата и доставка товара",
      codeid: 1,
    },
    {
      text: "Ежемесячная подписка",
      codeid: 1,
    },
    {
      text: "Реферальная программа",
      codeid: 2,
    },
    {
      text: "Производственная программа",
      codeid: 2,
    },
    {
      text: "Политика конфиденциальности",
      codeid: 3,
    },
    {
      text: " Договор оферты",
      codeid: 3,
    },
  ];

  useEffect(() => {
    setSecondID(0);
    setThreeId(0);
  }, [lookMenu]);

  const openNum = () => dispatch(lookNumberFN(true));
  //// открываю модалку для отправки номера

  const clickFirstMenu = (id) => {
    dispatch(activeBrandsFN(id));
    dispatch(lookMenuFN(false));
    navigate("/");
  };

  //// delete
  const listBrands = [
    { id: 1, collectionName: "Nike" },
    { id: 2, collectionName: "Adidas" },
    { id: 3, collectionName: "Puma" },
    { id: 4, collectionName: "Reebok" },
    { id: 5, collectionName: "Under Armour" },
  ];

  return (
    <div className="menuChoice">
      <button onClick={openMenu} className="userLogo">
        <img src={menu} alt="menu" />
      </button>
      {dataUser?.haveBeen ? (
        <button className="userLogo">
          <img src={userCheck} alt="userCheck" />
        </button>
      ) : (
        <button className="userLogo" onClick={openNum}>
          <img src={user} alt="userCheck" />
          <p>Войти</p>
        </button>
      )}

      {lookMenu && (
        <div className="menuChoice__parent">
          <div className="menuChoice__first">
            {listBrands?.map((i) => (
              <p
                className={i.id == activeBrands ? "activeMenu" : ""}
                onClick={() => clickFirstMenu(i.id)}
              >
                {i?.collectionName}
              </p>
            ))}
          </div>

          <div className="menuChoice__second">
            {secondList?.map((i) => (
              <p onClick={() => setThreeId(i.codeid)}>{i.text}</p>
            ))}
          </div>

          <div className="menuChoice__three">
            {threeList?.map((i) => (
              <p>{i.text}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuChoice;
