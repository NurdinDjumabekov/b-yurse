import React from "react";
import "./style.scss";

const Promocode = () => {
  return (
    <div className="promocode">
      <p>Промокод с бонусами</p>
      <input type="text" placeholder="10BEYURSE2024" />
      <button>Применить</button>
      <span>Как получить промокод?</span>
    </div>
  );
};

export default Promocode;
