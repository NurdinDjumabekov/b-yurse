import React from "react";
import imgMan from "../../assets/icons/whileMan.svg";
import "./style.scss";
import { useDispatch } from "react-redux";
import { lookNumberFN } from "../../store/reducers/stateSlice";

const CheckUser = () => {
  const dispatch = useDispatch();

  const openNum = () => {
    dispatch(lookNumberFN(true)); //// открываю модалку для отправки номера
  };

  if (true) {
    return (
      <div className="checkUser">
        <p>Вы уже зарегистрированы?</p>
        <button className="choiceCloth" onClick={openNum}>
          <span>Войти в свой аккаунт </span>
          <img src={imgMan} alt="0" />
        </button>
        <p>
          Если нет, то заполните ниже все поля, чтобы доставить ваш заказ —
          именно вам
        </p>
      </div>
    );
  }
};

export default CheckUser;
