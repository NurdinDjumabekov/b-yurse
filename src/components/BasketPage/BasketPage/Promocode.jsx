import React from "react";
import "./style.scss";

const Promocode = () => {
  return (
    <div className="resultAction promocode">
      <p>Промокод со скидками и (или) бонусами</p>
      <div className="action">
        <span>10BEYURSE2024</span>
        <button type="submit" className="choiceCloth">
          Применить
        </button>
      </div>
    </div>
  );
};

export default Promocode;
