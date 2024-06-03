import React from "react";
import "./style.scss";
import { list } from "../../../helpers/LodalData";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

const MayBeFavorite = () => {
  return (
    <div className="mayBeFavorite">
      <h4>Просмотренное, которое можно отложить в «Избранное»</h4>
      <ul className="mayBeFavorite__list">
        {list?.slice(0, 6)?.map((item, index) => (
          <RenderEveryCloth
            item={item}
            key={index}
            index={index}
            detailed={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default MayBeFavorite;
