import React from "react";
import "./style.scss";
import { listBasket } from "../../helpers/LodalData";

import pay1 from "../../assets/images/pay1.png";
import pay2 from "../../assets/images/pay2.png";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import { useState } from "react";
import ClothSize from "../../components/SalePage/ClothSize/ClothSize";
import ClothColor from "../../components/SalePage/ClothColor/ClothColor";

const BasketPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__inner">
          <h4>Моя корзина: подтверждение заказа</h4>
          {listBasket?.map((item) => (
            <div className="basket__every">
              <div className="mainImg">
                <img src="" alt="" />
              </div>
              <div className="dopContant">
                <h5>{item?.title}</h5>
                <p>{item?.price}</p>
                <div className="blockPay">
                  <img src={pay2} alt="pay" />
                  <img src={pay1} alt="pay" />
                  <span>4 платежа по ~870 ₽</span>
                </div>
                <h5>Количество</h5>
                <div className="counterBlock">
                  <button onClick={() => setCount(count - 1)}>
                    <img src={minus} alt="-" />
                  </button>
                  <span>{count}</span>
                  <button onClick={() => setCount(count + 1)}>
                    <img src={plus} alt="+" />
                  </button>
                </div>
                <div className="sizesColors">
                  <ClothSize oneCodeId={1} />
                  <ClothColor oneCodeId={1} />
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
