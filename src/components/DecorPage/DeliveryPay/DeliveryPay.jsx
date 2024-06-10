import React, { useState } from "react";
import Selects from "../../../common/Selects/Selects";
import "./style.scss";

import like from "../../../assets/images/likeBlack.png";

import {
  advartisingInner,
  confidation,
  confidationInner,
  listDelivery,
  listKredit,
} from "../../../helpers/LodalData";

import {
  sumTotalBasket,
  sumTotalBasketOldPrice,
} from "../../../helpers/SumTotalBasket";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeliveryPay = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  const navigate = useNavigate();

  const { basketList } = useSelector((state) => state.saveDataSlice);

  const list = [
    { codeid: 1, name: "«Деловые линии 1none»" },
    { codeid: 2, name: "«Деловые линии 2two»" },
    { codeid: 3, name: "«Деловые линии 3three»" },
    { codeid: 4, name: "Невидимый транспорт" },
  ];

  const onChnage = (key, name) => {
    console.log(key, name);
  };

  // const sendData = () => {
  //   navigate("/");
  //   alert("Ваш заказ успешно был оформлен");
  // };

  return (
    <div className="deliveryPay">
      <div>
        <h6>Выбрать способ доставки</h6>
        <div className="line"></div>
        <div className="delivery">
          <Selects
            list={listDelivery}
            title={"Транспортная компания до пункта"}
            initText={"«Деловые линии»"}
            onChnage={onChnage}
            nameKey={"transport"}
          />

          <Selects
            list={listDelivery}
            title={"Транспортная компания до двери"}
            initText={"«Деловые линии»"}
            onChnage={onChnage}
            nameKey={"dver"}
          />
        </div>
      </div>
      <div>
        <h6>Выбрать способ оплаты</h6>
        <div className="line"></div>
        <div className="delivery">
          <div className="typePay" onClick={() => setState(!state)}>
            <h6>Банковская карта</h6>
            <div className="typePay__inner">
              {state ? (
                <div className="round"></div>
              ) : (
                <img src={like} alt="like" className="roundImg" />
              )}
              <p>выбрать этот способ оплаты</p>
            </div>
          </div>

          <Selects
            list={listKredit}
            title={"Беспроцентная рассрочка"}
            initText={"«Деловые линии»"}
            onChnage={onChnage}
            nameKey={"dver"}
          />
        </div>
      </div>
      <div className="line big"></div>

      <div className="agreementCofidantion" onClick={() => setState1(!state1)}>
        {state1 ? (
          <div className="round" />
        ) : (
          <img src={like} alt="like" className="roundImg" />
        )}
        <p className={`agreement__text ${!state1 && "active"}`}>
          {confidation}
          <i> {confidationInner}</i>
        </p>
      </div>

      <div className="agreementAdvertising" onClick={() => setState2(!state2)}>
        {state2 ? (
          <div className="round" />
        ) : (
          <img src={like} alt="like" className="roundImg" />
        )}
        <p className={`agreement__text ${!state2 && "active"}`}>
          {confidation}
          <i>{advartisingInner}</i>
        </p>
      </div>

      <div className="result">
        <p>Итого: </p>
        <span>{sumTotalBasket(basketList)} ₽</span>
        {+sumTotalBasket(basketList) < sumTotalBasketOldPrice(basketList) && (
          <i>{sumTotalBasketOldPrice(basketList)} ₽</i>
        )}
      </div>

      <div className="action">
        <button
          type="submit"
          disabled={state1 || state2}
          className={(state1 || state2) && "disable"}
        >
          Оплатить мой заказ
        </button>
        <p>без учета доставки вашего заказа: обычно около 500 ₽</p>
      </div>
    </div>
  );
};

export default DeliveryPay;
