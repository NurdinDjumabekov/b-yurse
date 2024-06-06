///hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

/////style
import "./style.scss";

////imgs
import pay1 from "../../assets/images/pay1.png";
import pay2 from "../../assets/images/pay2.png";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import deleteImg from "../../assets/icons/delete.svg";

//////components
import Promocode from "../../components/BasketPage/BasketPage/Promocode";
import { useDispatch, useSelector } from "react-redux";
import { deleteProdBasket } from "../../store/reducers/saveDataSlice";
import { addProdBasket } from "../../store/reducers/saveDataSlice";
import { removeProdBasket } from "../../store/reducers/saveDataSlice";

////helpers
import { sarchImg } from "../../helpers/sarchImg";
import {
  sumTotalBasket,
  sumTotalBasketOldPrice,
} from "../../helpers/SumTotalBasket";

const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { basketList } = useSelector((state) => state.saveDataSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__inner">
          <h4>Моя корзина: подтверждение заказа</h4>
          {basketList?.map((item) => (
            <>
              <div className="basket__every">
                <div className="mainImg">
                  <img src={sarchImg(item?.photos)?.url} alt="" />
                </div>
                <div className="dopContant">
                  <div className="mainInfo">
                    <h5>{item?.productName}</h5>
                  </div>
                  <p>{item?.price} ₽</p>
                  <div className="blockPay">
                    <img src={pay2} alt="pay" />
                    <img src={pay1} alt="pay" />
                    <span>4 платежа по ~870 ₽</span>
                  </div>
                  <h5>Количество</h5>
                  <div className="counterBlock">
                    <button onClick={() => dispatch(removeProdBasket(item))}>
                      <img src={minus} alt="-" />
                    </button>
                    <span>{item?.count}</span>
                    <button onClick={() => dispatch(addProdBasket(item))}>
                      <img src={plus} alt="+" />
                    </button>
                  </div>
                  <div className="sizesColors">
                    <div className="sizes">
                      <div className="sizes__inner">
                        <span>Размерная сетка</span>
                        <b>
                          {
                            item?.sizes?.filter(
                              (i) => i.id == item?.activeColorEvery
                            )?.[0]?.sizeName
                          }
                        </b>
                      </div>
                      <div className="sizes__inner">
                        <span>Цветовая палитра</span>
                        <img
                          src={
                            item?.colors?.filter(
                              (i) => i.id == item?.activeColorEvery
                            )?.[0]?.color
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deleteAction">
                  <button onClick={() => dispatch(deleteProdBasket(item))}>
                    <img src={deleteImg} alt="delete" />
                  </button>
                </div>
              </div>
              <div className="line"></div>
            </>
          ))}

          <Promocode />
          <div className="line"></div>
          <div className="result">
            <p>Итого: </p>
            <span>{sumTotalBasket(basketList)} ₽</span>
            {+sumTotalBasket(basketList) <
              sumTotalBasketOldPrice(basketList) && (
              <i>{sumTotalBasketOldPrice(basketList)} ₽</i>
            )}
          </div>
          <div className="confirm" onClick={() => navigate("/decor")}>
            <button>Подтвердить мой заказ</button>
            <span>без учета доставки вашего заказа: обычно около 500 ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
