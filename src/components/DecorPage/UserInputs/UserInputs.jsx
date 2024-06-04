import React from "react";
import MyInputs from "../MyInput/MyInputs";
import "./style.scss";
import phone from "../../../assets/icons/phone.svg";

const UserInputs = ({ refAddres }) => {
  const onChange = (e) => {
    console.log(e);
  };

  const sendMainData = (e) => {
    e.preventDefault();
    console.log("asdsa");
    refAddres?.current?.focus();
  };

  return (
    <div className="userInputAddres">
      <h6>Мои данные</h6>
      <div className="line"></div>

      <form onSubmit={sendMainData} className="userInputMain__inner">
        <MyInputs
          title={"Имя"}
          placeholder={"Александра"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={"Номер сотового телефона"}
          placeholder={"+7 937 475-75-95"}
          onChange={onChange}
          required={true}
        />

        <div className="choiceCloth">
          <span>Подтвердить номер</span>
          <img src={phone} alt="[]" />
        </div>

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

        <button />

        <MyInputs
          title={"Отчество (если нет отчества, то пусто)"}
          placeholder={"Александровна"}
          onChange={onChange}
          required={true}
        />
      </form>
    </div>
  );
};

export default UserInputs;
