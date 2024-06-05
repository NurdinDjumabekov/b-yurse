/////hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

///...fns
import { lookNumberFN, numberUserFN } from "../../../store/reducers/stateSlice";
import { lookNumberConfFN } from "../../../store/reducers/stateSlice";

////componets
import Modal from "../../../common/Modal/Modal";
import InputMask from "react-input-mask";

////style
import "./style.scss";

////imgs
import phone from "../../../assets/icons/phone.svg";
import { tranformNumber } from "../../../helpers/tranformNumber";
import { sendNumberFN } from "../../../store/reducers/requestSlice";

const ModalNumber = () => {
  const dispatch = useDispatch();

  const { lookNumber, numberUser } = useSelector((state) => state.stateSlice);

  const sendNums = () => {
    if (tranformNumber(numberUser)?.length === 11) {
      dispatch(sendNumberFN(numberUser));
      dispatch(lookNumberFN(false)); ////// закрываю модалку для ввода номера (логин)
      dispatch(lookNumberConfFN(true)); ////// открываю подтверждение номера
    } else {
      alert("Введен некорректный номер телефона");
    }
  };

  return (
    <Modal
      openModal={lookNumber}
      setOpenModal={() => dispatch(lookNumberFN())}
      title={"Мой аккаунт"}
    >
      <div className="modalNum">
        <div className="myInput">
          <span>Номер сотового телефона</span>
          <InputMask
            mask="+9 999 999-99-99"
            placeholder="+7 937 475-75-95"
            name="number"
            onChange={(e) => dispatch(numberUserFN(e.target.value))}
            value={numberUser}
          />
        </div>
        <button className="choiceCloth" onClick={sendNums}>
          <span>Войти в свой аккаунт </span>
          <img src={phone} alt="0" />
        </button>
        <p>Мы вышлем код подтверждения по SMS на ваш номер.</p>
      </div>
    </Modal>
  );
};

export default ModalNumber;
