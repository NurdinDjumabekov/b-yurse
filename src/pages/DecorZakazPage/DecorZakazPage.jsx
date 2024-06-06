import React from "react";
import "./style.scss";
import CheckUser from "../../components/CheckUser/CheckUser";
import UserInputs from "../../components/DecorPage/UserInputs/UserInputs";
import UserAddresInputs from "../../components/DecorPage/UserAddresInputs/UserAddresInputs";
import { useRef } from "react";
import DeliveryPay from "../../components/DecorPage/DeliveryPay/DeliveryPay";
import { useEffect } from "react";

const DecorZakazPage = () => {
  const refAddres = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="decor">
      <div className="container">
        <div className="decor__inner">
          <h5>Моя корзина: оформление заказа</h5>
          <CheckUser />
          <UserInputs refAddres={refAddres} />
          <UserAddresInputs refAddres={refAddres} />
          <DeliveryPay />
        </div>
      </div>
    </div>
  );
};

export default DecorZakazPage;
