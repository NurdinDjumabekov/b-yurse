import React from "react";
import "./style.scss";
import CheckUser from "../../components/CheckUser/CheckUser";
import UserInputs from "../../components/DecorPage/UserInputs/UserInputs";
import UserAddresInputs from "../../components/DecorPage/UserAddresInputs/UserAddresInputs";
import { useRef } from "react";
import DeliveryPay from "../../components/DecorPage/DeliveryPay/DeliveryPay";
import ModalNumber from "../../components/Modals/ModalNumber/ModalNumber";
import ModalNumConfirm from "../../components/Modals/ModalNumConfirm/ModalNumConfirm";

const DecorZakazPage = () => {
  const refAddres = useRef(null);

  return (
    <div className="decor">
      <div className="container">
        <div className="decor__inner">
          <h5>Моя корзина: оформление заказа</h5>
          <CheckUser />
          <UserInputs refAddres={refAddres} />
          <UserAddresInputs refAddres={refAddres} />
          <DeliveryPay />
          <ModalNumber />
          <ModalNumConfirm />
        </div>
      </div>
    </div>
  );
};

export default DecorZakazPage;
