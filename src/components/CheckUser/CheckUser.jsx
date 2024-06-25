import React from "react";
import imgMan from "../../assets/icons/whileMan.svg";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { lookNumberFN } from "../../store/reducers/stateSlice";

const CheckUser = () => {
  const dispatch = useDispatch();

  const { dataUser } = useSelector((state) => state.saveDataSlice);

  const openNum = () => dispatch(lookNumberFN(true));
  //// открываю модалку для отправки номера

  if (!dataUser?.haveBeen) {
    return (
      <div className="checkUser">
        <h5>Вы зарегистрированы?</h5>
        <button className="choiceCloth" onClick={openNum}>
          Войти
        </button>
        <p>
          если вы не зарегистрированы, то <span>нажмите здесь</span>
        </p>
      </div>
    );
  }
};

export default CheckUser;
