import React from "react";
import "./style.scss";
import CheckUser from "../../components/CheckUser/CheckUser";
import UserInputs from "../../components/DecorPage/UserInputs/UserInputs";
import UserAddresInputs from "../../components/DecorPage/UserAddresInputs/UserAddresInputs";
import { useRef } from "react";
import DeliveryPay from "../../components/DecorPage/DeliveryPay/DeliveryPay";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavPath } from "../../common/NavPath/NavPath";
import { listNavDecor } from "../../helpers/LodalData";

const DecorZakazPage = () => {
  const refAddres = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sendData = () => {
    navigate("/");
    alert("Ваш заказ успешно был оформлен");
  };

  return (
    <div className="decor">
      <div className="container">
        <div className="decor__inner">
          <NavPath list={listNavDecor} />
          <CheckUser />
          <form onSubmit={sendData}>
            <UserInputs refAddres={refAddres} />
            <UserAddresInputs refAddres={refAddres} />
            <DeliveryPay />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DecorZakazPage;
