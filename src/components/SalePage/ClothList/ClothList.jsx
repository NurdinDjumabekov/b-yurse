import React from "react";
import "./style.scss";
import Sorting from "../Sorting/Sorting";
import women from "../../../assets/images/Rectangle 478.png";
import basket from "../../../assets/icons/basket.svg";
import { NavLink } from "react-router-dom";
import { list } from "../../../helpers/LodalData";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

const ClothList = () => {
  return (
    <div className="clothList">
      <Sorting />
      <ul className="clothList__inner">
        {list?.map((item, index) => (
          <RenderEveryCloth item={item} key={index} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ClothList;
