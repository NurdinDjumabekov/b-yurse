import React from "react";
import "./style.scss";
import { list } from "../../../helpers/LodalData";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

const RecomCloth = () => {
  return (
    <div className="recom">
      <h4>Можно дополнить образ, чтобы собрать весь комплект</h4>
      <ul className="recom__list">
        {list?.slice(0, 4)?.map((item) => (
          <RenderEveryCloth item={item} key={item.codeid} detailed={false} />
        ))}
      </ul>
    </div>
  );
};

export default RecomCloth;
