///hooks
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

///imgs
import info from "../../../assets/icons/Info.svg";

///style
import "./style.scss";

////fns
import { lookSizeFN } from "../../../store/reducers/stateSlice";

//////helpers
import { arrSizeRow, arrSizeTable } from "../../../helpers/LodalData";
import { texxtSize1, texxtSize2 } from "../../../helpers/LodalData";

const ClothSize = ({ oneCodeId }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { lookSize } = useSelector((state) => state.stateSlice);

  const [listClothSize, setListClothSize] = useState([
    {
      codeid: 1,
      text: "xXs",
      count: 12,
      active: true,
    },
    {
      codeid: 2,
      text: "xs",
      count: 12,
      active: false,
    },
    {
      codeid: 3,
      text: "OV3",
      count: 12,
      active: false,
    },
    {
      codeid: 4,
      text: "xxs",
      count: 100,
      active: false,
    },
    {
      codeid: 5,
      text: "xXs",
      count: 12,
      active: false,
    },
    {
      codeid: 6,
      text: "xs",
      count: 12,
      active: false,
    },
    {
      codeid: 7,
      text: "OV3",
      count: 12,
      active: false,
    },
    {
      codeid: 8,
      text: "xxs",
      count: 100,
      active: false,
    },
  ]);

  const clickListMan = (codeid) => {
    const newData = listClothSize?.map((item) => ({
      ...item,
      active: item.codeid === codeid, // обновляем только поле active
    }));
    setListClothSize(newData);
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
                className={item?.active ? "activeItem" : ""}
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
