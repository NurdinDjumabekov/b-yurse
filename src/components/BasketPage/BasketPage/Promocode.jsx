import React from "react";
import "./style.scss";
import { useState } from "react";

const Promocode = () => {
  const [promocode, setPromocode] = useState("");

  console.log(promocode, "promocode");

  return (
    <div className="resultAction promocode">
      <p>Промокод со скидками и (или) бонусами</p>
      <div className="action">
        <input
          placeholder={"10BEYURSE2024"}
          onChange={(e) => setPromocode(e.target.value)}
          value={promocode}
        />
        <button type="submit" className="choiceCloth">
          Применить
        </button>
      </div>
    </div>
  );
};

export default Promocode;
