import React from "react";
import "./style.scss";
import { dataCatalog } from "../../helpers/LodalData";
import checkImg from "../../assets/icons/CheckCircleWhite.svg";

const ChoiceCatalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__inner">
          {dataCatalog?.map((item) => (
            <div className="everyCatalog">
              <div className="shadow"></div>
              <img src={item?.img} alt="woman" />
              <div className="everyCatalog__inner">
                <h4>{item?.title}</h4>
                <div className="line"></div>
                <p>{item?.description}</p>
                <div className="catalogAction">
                  <button>Перейти в каталог</button>
                  <div className="catalogAction__inner">
                    <img src={checkImg} alt="ok" />
                    <span>доставка — бесплатная от 10,000 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoiceCatalog;
