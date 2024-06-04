import React from "react";
import MyInputs from "../MyInput/MyInputs";
import "./style.scss";
import phone from "../../../assets/icons/phone.svg";
import save from "../../../assets/icons/save.svg";

const UserAddresInputs = ({ refAddres }) => {
  const onChange = (e) => {
    console.log(e);
  };

  const sendMainData = (e) => {
    e.preventDefault();
    console.log("asdsa");
  };
  const moreText = () => {
    return <p>если частный дом, то пусто</p>;
  };

  return (
    <div className="userInputMain">
      <h6>Адрес доставки</h6>
      <div className="line"></div>

      <form onSubmit={sendMainData} className="userInputMain__inner">
        <MyInputs
          title={"Страна и город"}
          placeholder={"Россия, Москва"}
          onChange={onChange}
          required={true}
          refAddres={refAddres}
        />

        <MyInputs
          title={"Индекс"}
          placeholder={"101000"}
          onChange={onChange}
          required={true}
        />

        <div className="saveBtn">
          <span>Автосохранение</span>
          <img src={save} alt="[]" />
        </div>

        <MyInputs
          title={"Улица и дом"}
          placeholder={"Кремлевская площадь, дом 1"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={`Квартира (если частный дом, то пусто) ${moreText()}`}
          placeholder={"1"}
          onChange={onChange}
          required={true}
        />

        <button />
      </form>
    </div>
  );
};

export default UserAddresInputs;
