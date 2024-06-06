import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import Sorting from "../Sorting/Sorting";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";
import { getListCloth } from "../../../store/reducers/requestSlice";
import { useEffect } from "react";
import { defaultRequest } from "../../../helpers/LodalData";

const ClothList = () => {
  const dispatch = useDispatch();

  const { listCloth } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getListCloth(defaultRequest));
  }, []);

  return (
    <div className="clothList">
      <Sorting />
      <ul className="clothList__inner">
        {listCloth?.length === 0 ? (
          <p className="emptyData">Данных пока что нет</p>
        ) : (
          <>
            {listCloth?.map((item) => (
              <RenderEveryCloth item={item} key={item.id} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default ClothList;
