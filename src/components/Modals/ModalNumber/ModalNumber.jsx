/////hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

///...fns
import { lookNumberFN } from "../../../store/reducers/stateSlice";
import { lookNumberConfFN } from "../../../store/reducers/stateSlice";

////componets
import Modal from "../../../common/Modal/Modal";
import MyInputs from "../../DecorPage/MyInput/MyInputs";

////style
import "./style.scss";

////imgs
import phone from "../../../assets/icons/phone.svg";

const ModalNumber = () => {
  const dispatch = useDispatch();
  const { lookNumber } = useSelector((state) => state.stateSlice);

  const onChange = () => {};

  const sendNums = () => {
    dispatch(lookNumberFN(false)); ////// закрываю модалку для ввода номера (логин)
    dispatch(lookNumberConfFN(true)); ////// открываю подтверждение номера
  };

  return (
    <Modal
      openModal={lookNumber}
      setOpenModal={() => dispatch(lookNumberFN())}
      title={"Мой аккаунт"}
    >
      <div className="modalNum">
        <MyInputs
          title={"Номер сотового телефона"}
          placeholder={"+7 937 475-75-95"}
          onChange={onChange}
        />
        <button className="choiceCloth" onClick={sendNums}>
          <span>Войти в свой аккаунт </span>
          <img src={phone} alt="0" />
        </button>
        <p>
          вам позвонит входящий номер телефона, введите последние четыре цифры
        </p>
      </div>
    </Modal>
  );
};

export default ModalNumber;
