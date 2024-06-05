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
import {
  arrSizeRow,
  arrSizeTable,
  listClothSize,
} from "../../../helpers/LodalData";
import { texxtSize1, texxtSize2 } from "../../../helpers/LodalData";

const ClothSize = ({ oneCodeId }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { lookSize, activeSize } = useSelector((state) => state.stateSlice);

  const clickListMan = (codeid) => {
    dispatch(activeSizeFN(codeid));
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
          <div className="size__modal">
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
          ? listClothSize?.map((item) => {
              if (oneCodeId == item.codeid) {
                return <li key={item?.codeid}>{item?.text}</li>;
              }
            })
          : listClothSize?.map((item) => (
              <li
                key={item?.codeid}
                className={activeSize == item.codeid ? "activeItem" : ""}
                onClick={() => clickListMan(item.codeid)}
              >
                {item?.text}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ClothSize;
