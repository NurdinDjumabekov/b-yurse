import React, { useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  lookNumberConfFN,
  lookNumberFN,
  numberUserFN,
} from "../../store/reducers/stateSlice";
import InputMask from "react-input-mask";
import { sendNumberFN } from "../../store/reducers/requestSlice";
import { tranformNumber } from "../../helpers/tranformNumber";

const CheckUser = () => {
  const dispatch = useDispatch();

  const { numberUser } = useSelector((state) => state.stateSlice);
  const { dataUser } = useSelector((state) => state.saveDataSlice);

  const [look, setLook] = useState(false);

  const openNum = () => setLook(true);
  //// открываю блока для отправки номера

  const sendNums = () => {
    if (tranformNumber(numberUser)?.length === 11) {
      dispatch(sendNumberFN(numberUser));
      dispatch(lookNumberConfFN(true)); ////// открываю подтверждение номера
    } else {
      alert("Введен некорректный номер телефона");
    }
  };

  if (!dataUser?.haveBeen) {
    return (
      <div className="checkUser">
        {look ? (
          <h5>Регистрация по номеру телефона</h5>
        ) : (
          <h5>Вы зарегистрированы?</h5>
        )}
        <>
          {look ? (
            <div className="sendNum">
              <InputMask
                mask="+9 999 999-99-99"
                placeholder="+7"
                name="number"
                onChange={(e) => dispatch(numberUserFN(e.target.value))}
                value={numberUser}
              />
              <button className="choiceCloth" onClick={sendNums}>
                Подтвердить номер
              </button>
            </div>
          ) : (
            <button className="choiceCloth" onClick={openNum}>
              Войти
            </button>
          )}
        </>
        <p>
          если вы не зарегистрированы, то <span>нажмите здесь</span>
        </p>
      </div>
    );
  }
};

export default CheckUser;
