///hooks
import React from "react";

/////style
import "./style.scss";

////imgs
import pay1 from "../../../assets/images/pay1.png";
import pay2 from "../../../assets/images/pay2.png";
import minus from "../../../assets/images/minus.png";
import plus from "../../../assets/images/plus.png";
import deleteImg from "../../../assets/icons/delete.svg";
import info from "../../../assets/icons/Info.svg";

//////components
import { deleteProdBasket } from "../../../store/reducers/saveDataSlice";
import { addProdBasket } from "../../../store/reducers/saveDataSlice";
import { removeProdBasket } from "../../../store/reducers/saveDataSlice";

////helpers
import { sarchImg } from "../../../helpers/sarchImg";
import { useDispatch } from "react-redux";

const EveryBasket = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="basket__every">
        <div className="basket__child">
          <div className="mainImg">
            <img src={sarchImg(item?.photos)?.url} alt="" />
          </div>
          <div className="dopContant">
            <div className="mainInfo">
              <h5>{item?.productName}</h5>
              <img src={info} alt="pay" />
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
                        (i) => i.id == item?.activeSizeEvery
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
        </div>

        <div className="deleteAction">
          <button onClick={() => dispatch(deleteProdBasket(item))}>
            <img src={deleteImg} alt="delete" />
          </button>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default EveryBasket;
