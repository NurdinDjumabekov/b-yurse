import React from "react";
import "./style.scss";
import { defaultRequest } from "../../../helpers/LodalData";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";
import { getListCloth } from "../../../store/reducers/requestSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RecomCloth = ({ list }) => {
  const dispatch = useDispatch();

  const { listCloth } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getListCloth(defaultRequest));
  }, []);

  if (list?.length > 0) {
    return (
      <div className="recom">
        <h4>Можно дополнить образ, чтобы собрать весь комплект</h4>
        <ul className="recom__list">
          {listCloth?.map((item) => (
            <RenderEveryCloth item={item} key={item.id} detailed={false} />
          ))}
        </ul>
      </div>
    );
  }
};

export default RecomCloth;
