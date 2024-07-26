///hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/////style
import "./style.scss";

//////components
import Promocode from "../../components/BasketPage/BasketPage/Promocode";
import { useDispatch, useSelector } from "react-redux";

////helpers
import { sumTotalBasketOldPrice } from "../../helpers/SumTotalBasket";
import { listNavBasket } from "../../helpers/LodalData";
import { sumTotalBasket } from "../../helpers/SumTotalBasket";
////delete

import EveryBasket from "../../components/BasketPage/EveryBasket/EveryBasket";
import { NavPath } from "../../common/NavPath/NavPath";
import SkeletonsBasketPage from "../../common/Skeletons/SkeletonsBasketPage/SkeletonsBasketPage";

const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { basketList, preloader } = useSelector((state) => state.saveDataSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const nav = () => {
    if (basketList?.length === 0) {
      alert("У вас пустой список");
      navigate("/");
    } else {
      navigate("/decor");
    }
  };

  if (preloader) {
    return <SkeletonsBasketPage />;
  }

  return (
    <div className="basket">
      <div className="container">
        <NavPath list={listNavBasket} />
        <div className="basket__inner">
          {basketList?.map((item) => (
            <EveryBasket item={item} key={item.id} />
          ))}
          <Promocode />
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
