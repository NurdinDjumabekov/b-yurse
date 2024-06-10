import React from "react";
import "./style.scss";
import { defaultRequest } from "../../../helpers/LodalData";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

import { getListCloth } from "../../../store/reducers/requestSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MayBeFavorite = ({ list }) => {
  const dispatch = useDispatch();

  const { listCloth } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getListCloth(defaultRequest));
  }, []);

  if (list?.length > 0) {
    return (
      <div className="mayBeFavorite">
        <h4>Просмотренное, которое можно отложить в «Избранное»</h4>
        <ul className="mayBeFavorite__list">
          {list?.map((item) => (
            <RenderEveryCloth item={item} key={item.id} detailed={false} />
          ))}
        </ul>
      </div>
    );
  }
};

export default MayBeFavorite;
