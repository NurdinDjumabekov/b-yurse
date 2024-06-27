import React from "react";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import MyInputs from "../MyInput/MyInputs";
import { lookNumberConfFN } from "../../../store/reducers/stateSlice";
import "./style.scss";

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

  const openNum = () => dispatch(lookNumberConfFN(true));

  return (
    <div className="userInputAddres">
      <h6>Мои данные</h6>
      <div>
        <MyInputs
          title={"Имя"}
          placeholder={"Александра"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={"Фамилия"}
          placeholder={"Александрова"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={"Отчество "}
          placeholder={"Александровна"}
          onChange={onChange}
          moreTitle={"(если нет отчества, то пусто)"}
        />

        <div className="twoInputs">
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

          {!dataUser?.haveBeen && (
            <div className="choiceCloth" onClick={openNum}>
              Подтвердить номер
            </div>
          )}
        </div>

        <MyInputs
          title={"Электронная почта"}
          placeholder={"womanfromthefuture@icloud.com"}
          onChange={onChange}
          required={true}
          email={true}
        />
      </div>
    </div>
  );
};

export default UserInputs;

// {!dataUser?.haveBeen ? (
//   <div className="saveBtn">
//     <span>Автосохранение</span>
//     <img src={save} alt="[]" />
//   </div>
// ) : (
//   <div className="choiceCloth" onClick={openNum}>
//     <span>Подтвердить номер</span>
//     <img src={phone} alt="[]" />
//   </div>
// )}
