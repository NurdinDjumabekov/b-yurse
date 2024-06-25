import React from "react";
import MyInputs from "../MyInput/MyInputs";
import "../UserInputs/style.scss";

////delete
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

  return (
    <div className="userInputAddres">
      <h6>Выбрать адрес доставки</h6>

      <div>
        <MyInputs
          title={"Населенный пункт"}
          placeholder={"Москва, Московская область"}
          onChange={onChange}
          required={true}
          refAddres={refAddres}
        />

        <MyInputs
          title={"Улица и дом"}
          placeholder={"Кремлевская площадь, 1"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={"Квартира "}
          moreTitle={"(если отсутствует, пропустите строку)"}
          placeholder={"1"}
          onChange={onChange}
          required={true}
        />

        <MyInputs
          title={`Индекс`}
          placeholder={"1000"}
          onChange={onChange}
          moreTitle={"(если частный дом, то пусто)"}
        />

        {/* <button /> */}
      </div>
    </div>
  );
};

export default UserAddresInputs;
