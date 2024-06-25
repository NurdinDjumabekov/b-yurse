import React, { useState } from "react";
import Selects from "../../../common/Selects/Selects";
import "./style.scss";

import like from "../../../assets/images/likeBlack.png";

import {
  confidation,
  confidationInner,
  ////delete
  advartisingInner,
  listDelivery,
  listKredit,
  link1,
  link2,
} from "../../../helpers/LodalData";

import {
  sumTotalBasket,
  sumTotalBasketOldPrice,
} from "../../../helpers/SumTotalBasket";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MycheckBox from "../../../common/MycheckBox/MycheckBox";

const DeliveryPay = () => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);

  const [list, setList] = useState([
    { id: 1, text: "до пункта выдачи заказа", active: false },
    { id: 2, text: "до двери покупателя", active: false },
  ]);

  const [list1, setList1] = useState([
    { id: 1, text: "«СДЭК»", active: false },
    { id: 2, text: "«Деловые линии»", active: false },
    { id: 3, text: "«Боксберри»", active: false },
  ]);

  const [listPay, setListPay] = useState([
    { id: 1, text: "банковская карта", active: false },
    { id: 2, text: "беспроцентная рассрочка", active: false },
  ]);

  const [listPayPart, setListPayPart] = useState([
    { id: 1, text: "«Долями»", active: false },
  ]);

  const navigate = useNavigate();

  const { basketList } = useSelector((state) => state.saveDataSlice);

  const onChange = (data) => {
    setList(list.map((item) => (item.id === data.id ? data : item)));
  };

  const onChangeTypes = (data) => {
    setList1(list1.map((item) => (item.id === data.id ? data : item)));
  };

  const onChangePay = (data) => {
    setListPay(listPay.map((item) => (item.id === data.id ? data : item)));
  };

  const onChangePayPart = (data) => {
    setListPayPart(
      listPayPart?.map((item) => (item.id === data.id ? data : item))
    );
  };

  const checkLength = listPayPart?.length == 1;

  return (
    <div className="deliveryPay">
      <div className="userInputAddres deliveryPay__inner ">
        <h6>Выбрать способ доставки</h6>
        <div className="delivery">
          <div className="delivery__inner">
            {list?.map((item) => (
              <MycheckBox key={item.id} item={item} onChange={onChange} />
            ))}
          </div>

          <div className="delivery__type">
            {list1?.map((item) => (
              <MycheckBox key={item.id} item={item} onChange={onChangeTypes} />
            ))}
          </div>
        </div>
      </div>

      <div className="userInputAddres deliveryPay__inner ">
        <h6>Выбрать способ оплаты</h6>
        <div className={`delivery ${checkLength ? "deliveryBottom" : ""}`}>
          <div className="delivery__inner">
            {listPay?.map((item) => (
              <MycheckBox key={item.id} item={item} onChange={onChangePay} />
            ))}
          </div>

          <div className="delivery__type">
            {listPayPart?.map((item) => (
              <MycheckBox
                key={item.id}
                item={item}
                onChange={onChangePayPart}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="userInputAddres deliveryPay__moreResult">
        <div className="agreementCofidantion">
          <div onClick={() => setState1(!state1)}>
            {state1 ? (
              <div className="roundBlock" />
            ) : (
              <img src={like} alt="like" className="roundImg" />
            )}
          </div>
          <div className="moreText">
            <p onClick={() => setState1(!state1)}>{confidation}</p>
            <span className="linkText"> {link1}</span>
            <p onClick={() => setState1(!state1)}> и </p>
            <span className="linkText"> {link2}</span>
          </div>
        </div>

        <div className="resultAction">
          <p>Итоговая стоимость вашего заказа</p>
          <div className="action">
            <span>{sumTotalBasket(basketList)} ₽</span>
            <button type="submit" disabled={state1} className={"choiceCloth"}>
              Оплатить заказ
            </button>
          </div>
          <b>без учета доставки вашего заказа: обычно это стоит около 1000 ₽</b>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPay;
