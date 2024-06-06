import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInputs from "../MyInput/MyInputs";
import { lookNumberFN } from "../../../store/reducers/stateSlice";
import "./style.scss";
import phone from "../../../assets/icons/phone.svg";
import save from "../../../assets/icons/save.svg";
import InputMask from "react-input-mask";

const UserInputs = ({ refAddres }) => {
  const dispatch = useDispatch();

  const { dataUser } = useSelector((state) => state.saveDataSlice);

  const onChange = (e) => {
    console.log(e);
  };

  const sendMainData = (e) => {
    e.preventDefault();
    console.log("asdsa");
    refAddres?.current?.focus();
  };

  const openNum = () => dispatch(lookNumberFN(true));

  return (
    <div className="userInputAddres">
      <h6>Мои данные</h6>
      <div className="line"></div>

      <div className="userInputMain__inner">
        <MyInputs
          title={"Имя"}
          placeholder={"Александра"}
          onChange={onChange}
          required={true}
        />

        <div className="myInput">
          <span>Номер сотового телефона</span>
          <InputMask
            mask="+9 999 999-99-99"
            placeholder="+7 937 475-75-95"
            name="number"
            onChange={onChange}
            required
          />
        </div>

        {dataUser?.haveBeen ? (
          <div className="saveBtn">
            <span>Автосохранение</span>
            <img src={save} alt="[]" />
          </div>
        ) : (
          <div className="choiceCloth" onClick={openNum}>
            <span>Подтвердить номер</span>
            <img src={phone} alt="[]" />
          </div>
        )}

        <MyInputs
          title={"Фамилия"}
          placeholder={"Александрова"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={"Электронная почта"}
          placeholder={"womanfromthefuture@icloud.com"}
          onChange={onChange}
          required={true}
          email={true}
        />

        <div />

        <MyInputs
          title={"Отчество (если нет отчества, то пусто)"}
          placeholder={"Александровна"}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default UserInputs;
