///hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

/////style
import "./style.scss";

//////components
import Promocode from "../../components/BasketPage/BasketPage/Promocode";
import { useDispatch, useSelector } from "react-redux";

////helpers
import { sumTotalBasketOldPrice } from "../../helpers/SumTotalBasket";
import { sumTotalBasket } from "../../helpers/SumTotalBasket";
import EveryBasket from "../../components/BasketPage/EveryBasket/EveryBasket";

const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { basketList } = useSelector((state) => state.saveDataSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = () => {
    if (basketList?.length === 0) {
      alert("У вас пустой список");
      navigate("/");
    } else {
      navigate("/decor");
    }
  };

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__inner">
          <h4>Моя корзина: подтверждение заказа</h4>
          {basketList?.map((item) => (
            <EveryBasket item={item} key={item.id} />
          ))}
          <Promocode />
          {/* <div className="result">
            <p>Итого: </p>
            <span>{sumTotalBasket(basketList)} ₽</span>
            {+sumTotalBasket(basketList) <
              sumTotalBasketOldPrice(basketList) && (
              <i>{sumTotalBasketOldPrice(basketList)} ₽</i>
            )}
          </div> */}
          <div className="resultAction confirm">
            <p>Итоговая стоимость вашего заказа</p>
            <div className="action">
              <span>{sumTotalBasket(basketList)} ₽</span>
              <button className="choiceCloth" onClick={nav}>
                Подтвердить заказ
              </button>
            </div>
            <b>
              без учета доставки вашего заказа: обычно это стоит около 1000 ₽
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
