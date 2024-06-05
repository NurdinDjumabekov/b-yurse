///hooks
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

///imgs
import info from "../../../assets/icons/Info.svg";

///style
import "./style.scss";

////fns
import { activeSizeFN, lookSizeFN } from "../../../store/reducers/stateSlice";

//////helpers
import { arrSizeRow, arrSizeTable } from "../../../helpers/LodalData";
import { texxtSize1, texxtSize2 } from "../../../helpers/LodalData";
import { getListCloth } from "../../../store/reducers/requestSlice";

const ClothSize = ({ oneCodeId }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { lookSize } = useSelector((state) => state.stateSlice);
  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);

  const { listSize } = useSelector((state) => state.requestSlice);

  const clickListMan = (id) => {
    dispatch(activeSizeFN(id));
    const obj1 = { categId: activeCateg.categId, activeSize: id };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max, type: activeCateg.type };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const lookSizeCloth = (bool) => dispatch(lookSizeFN(bool));

  const checkPage = pathname.includes("every"); //// if это детальная страница

  return (
    <div>
      <div className="mainTitle position">
        <div className={`title ${checkPage && "everyPosition"}`}>
          <h3>Размерная сетка</h3>
          <img
            src={info}
            alt="info"
            className="imgAction"
            onClick={() => lookSizeCloth(true)}
          />
        </div>

        {lookSize && (
          <div className={`size__modal ${checkPage && "more__size"}`}>
            <div className="size__modal__inner">
              <div className="sizeRow">
                <span>российский размер</span>
                <span>обхват талии</span>
                <span>обхват груди</span>
                <span>обхват бёдер</span>
              </div>
              <div>
                <div className="sizeColumn">
                  {arrSizeRow?.map((item) => (
                    <span>{item}</span>
                  ))}
                </div>
                <div class="sizeTable">
                  {arrSizeTable?.map((item) => (
                    <span>{item}</span>
                  ))}
                  {arrSizeTable?.map((item) => (
                    <span>{item}</span>
                  ))}
                  {arrSizeTable?.map((item) => (
                    <span>{item}</span>
                  ))}
                  {arrSizeTable?.map((item) => (
                    <span>{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <p>{texxtSize2}</p>
            <p>{texxtSize1}</p>
          </div>
        )}
        {lookSize && (
          <div className="shadow" onClick={() => lookSizeCloth(false)}></div>
        )}
      </div>
      {!oneCodeId && <div className="line"></div>}
      <ul className="listSize">
        {oneCodeId
          ? listSize?.map((item) => {
              if (oneCodeId == item.id) {
                return <li key={item?.id}>{item?.sizeName}</li>;
              }
            })
          : listSize?.map((item) => (
              <li
                key={item?.id}
                className={activeSize == item.id ? "activeItem" : ""}
                onClick={() => clickListMan(item.id)}
              >
                {item?.sizeName}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ClothSize;
