////// hooks
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

////// hooks
import deleteImg from "../../assets/icons/delete.svg";
import clothColor from "../../assets/images/bigImg.png";

////// helpers
import { sarchImg } from "../../helpers/sarchImg";

////// style
import "./style.scss";

////// fns
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import { addDelProdFavourite } from "../../store/reducers/saveDataSlice";
import { deleteProdBasket } from "../../store/reducers/saveDataSlice";

////// components
import DiscountPrice from "../DiscountPrice/DiscountPrice";

const Cloth = ({ item, btn, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nav = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    navigate("basket");
  };

  const color = item?.colors?.filter((i) => i.id == item?.activeColorEvery);

  const size = item?.sizes?.filter((i) => i.id == item?.activeSizeEvery);

  const changeFavourite = (obj) => dispatch(addDelProdFavourite(obj));

  const delProdInBasket = (obj) => dispatch(deleteProdBasket(obj));

  if (type == "favourite") {
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
        </div>
        <div className="infoBlock">
          <div className="title">
            <h5>{item.productName}</h5>
            <button
              className="actionDelete"
              onClick={() => changeFavourite(item)}
            >
              <img src={deleteImg} alt="x" />
            </button>
          </div>
          <DiscountPrice item={item} />
          <div className="sizes">
            <div className="sizes__inner">
              <span>Размерная сетка (верх)</span>
              {/* <b>{size?.[0]?.sizeName}</b> */}
              {/* ////// local */}
              <button className="noneTypeCloth">не выбрано</button>
            </div>
            <div className="sizes__inner">
              <span>Цветовая палитра</span>
              {/* ////// local */}
              {/* <div className="colorImg">
                <img
                  src={color?.[0]?.color}
                  alt=""
                  className={item?.activeColorEvery ? "" : "noneImg"}
                />
              </div> */}
              <button className="noneTypeCloth">не выбрано</button>
            </div>
          </div>
          <div className="actions">
            <button className="choiceCloth favouriteBtnNone">Выбрать</button>
          </div>
        </div>
      </li>
    );
  }

  if (type == "basket") {
    console.log(item, "item");
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
        </div>
        <div className="infoBlock">
          <div className="title">
            <h5>{item?.productName}</h5>
            <button
              className="actionDelete"
              onClick={() => delProdInBasket(item)}
            >
              <img src={deleteImg} alt="x" />
            </button>
          </div>
          <DiscountPrice item={item} />
          <div className="sizes">
            <div className="sizes__inner">
              <span>Размерная сетка (верх)</span>
              {/* <b>{size?.[0]?.sizeName}</b> */}
              {/* ////// local */}
              <b>RS1</b>
            </div>
            <div className="sizes__inner">
              <span>Цветовая палитра</span>
              <div className="colorImg">
                {/* <img
                  src={color?.[0]?.color}
                  alt=""
                  className={item?.activeColorEvery ? '' : 'noneImg'}
                /> */}
                {/* ////// local */}
                <img
                  src={clothColor}
                  alt=""
                  className={item?.activeColorEvery ? "" : "noneImg"}
                />
              </div>
            </div>
          </div>
          <div className="actions">
            <button className="choiceCloth basketBtn" onClick={nav}>
              Начать оформление заказа
            </button>
          </div>
        </div>
      </li>
    );
  }
};

export default Cloth;
