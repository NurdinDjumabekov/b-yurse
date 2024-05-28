import React, { useState } from "react";
import info from "../../../assets/icons/Info.svg";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { lookSizeFN } from "../../../store/reducers/stateSlice";
import {
  arrSizeRow,
  arrSizeTable,
  texxtSize1,
  texxtSize2,
} from "../../../helpers/LodalData";

const ClothSize = () => {
  const dispatch = useDispatch();

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
      active: true,
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

  return (
    <>
      <div className="mainTitle position">
        <h3>Размерная сетка (верх)</h3>
        <img
          src={info}
          alt="info"
          className="imgAction"
          onClick={() => lookSizeCloth(true)}
        />

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
      <div className="line"></div>
      <ul className="listSize">
        {listClothSize?.map((item) => (
          <li
            key={item?.codeid}
            className={item?.active ? "activeItem" : ""}
            onClick={() => clickListMan(item.codeid)}
          >
            {item?.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClothSize;
