import React, { useEffect, useState } from "react";
import "./style.scss";
////imgs
import menu from "../../assets/icons/menu.svg";
import userCheck from "../../assets/icons/UserCheck.svg";
import user from "../../assets/icons/User.svg";
import { useDispatch, useSelector } from "react-redux";
import { lookMenuFN, lookNumberFN } from "../../store/reducers/stateSlice";

const MenuChoice = () => {
  const dispatch = useDispatch();

  const { lookMenu } = useSelector((state) => state.stateSlice);

  const { dataUser } = useSelector((state) => state.saveDataSlice);

  const openMenu = () => {
    dispatch(lookMenuFN(true));
  };

  const [secondID, setSecondID] = useState(0);
  const [threeId, setThreeId] = useState(0);

  const firstList = [
    {
      text: "Вся одежда",
      codeid: 1,
    },
    {
      text: "Подарочная карта",
      codeid: 2,
    },
    {
      text: "Реализация со скидками",
      codeid: 3,
    },
    {
      text: "Бестселлер-коллекция",
      codeid: 4,
    },
    {
      text: "Нью-коллекция",
      codeid: 5,
    },
    {
      text: "Мужская одежда",
      codeid: 6,
    },
  ];

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

  return (
    <>
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
              {firstList?.map((i) => (
                <p onClick={() => setSecondID(i.codeid)}>{i.text}</p>
              ))}
            </div>
            {!!secondID && (
              <div className="menuChoice__second">
                {secondList?.map((i) => (
                  <p onClick={() => setThreeId(i.codeid)}>{i.text}</p>
                ))}
              </div>
            )}
            {!!threeId && (
              <div className="menuChoice__three">
                {threeList?.map((i) => (
                  <p>{i.text}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuChoice;
