import React from "react";
import "./style.scss";
import Sorting from "../Sorting/Sorting";
import { list } from "../../../helpers/LodalData";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

const ClothList = () => {
  return (
    <div className="clothList">
      <Sorting />
      <ul className="clothList__inner">
        {list?.map((item) => (
          <RenderEveryCloth item={item} key={item.codeid} />
        ))}
      </ul>
    </div>
  );
};

export default ClothList;
