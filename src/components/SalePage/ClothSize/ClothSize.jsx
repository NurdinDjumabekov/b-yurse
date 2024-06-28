///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///style
import "./style.scss";

////fns
import { activeSizeEveryFN } from "../../../store/reducers/stateSlice";
import { activeSizeFN } from "../../../store/reducers/stateSlice";

//////helpers
import { getListCloth } from "../../../store/reducers/requestSlice";

///// delete
import { arrSizeRow, arrSizeTable } from "../../../helpers/LodalData";
import { texxtSize1, texxtSize2 } from "../../../helpers/LodalData";

const ClothSize = ({ choiceEvery, typeSize }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeSizeEvery } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);

  // const { listSize } = useSelector((state) => state.requestSlice);

  const clickListMan = (id) => {
    const objSize = { ...activeSize, [typeSize === "up" ? "up" : "down"]: id };

    dispatch(activeSizeFN(objSize));

    const { categId, type } = activeCateg;
    const obj1 = { categId, type, activeSize: objSize, activeBrands };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const choiceForBasket = (id) => dispatch(activeSizeEveryFN(id));

  ////////////////////////////////////// delete
  const listSize = [
    { id: 1, sizeName: "S" },
    { id: 2, sizeName: "M" },
    { id: 3, sizeName: "L" },
    { id: 4, sizeName: "XL" },
    { id: 5, sizeName: "XXL" },
  ];

  const obj = { 1: "RS1", 2: "777-777", 3: "777-777", 4: "777-777" };

  const mainTitle = typeSize === "up" ? "(верх)" : "(низ)";

  if (choiceEvery) {
    return (
      <div className="sizeParent">
        <div className="mainTitle">
          <h3>Размерная сетка {mainTitle}</h3>
        </div>
        <ul className="listSize">
          {listSize?.map((item) => (
            <li key={item?.id} onClick={() => choiceForBasket(item?.id)}>
              <p className={activeSizeEvery == item?.id ? "activeItem" : ""}>
                {item?.sizeName}
              </p>
              <div className="moreSize">
                <div className="moreSize__inner">
                  <div className="infoSize">
                    <b>размер</b>
                    <b>обхват талии</b>
                    <b>обхват груди</b>
                    <b>обхват бедер</b>
                  </div>
                  <div className="typesSize">
                    <h6>{obj?.[1]}</h6>
                    <span>{obj?.[2]}</span>
                    <span>{obj?.[3]}</span>
                    <span>{obj?.[4]}</span>
                  </div>
                </div>
              </div>
              <div className="shadowSize"></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="sizeParent">
      <div className="mainTitle">
        <h3>Размерная сетка {mainTitle}</h3>
      </div>
      <ul className="listSize">
        {listSize?.map((item) => (
          <li key={item?.id} onClick={() => clickListMan(item.id)}>
            <p
              className={activeSize?.[typeSize] == item.id ? "activeItem" : ""}
            >
              {item?.sizeName}
            </p>
            <div className="moreSize">
              <div className="moreSize__inner">
                <div className="infoSize">
                  <b>размер</b>
                  <b>обхват талии</b>
                  <b>обхват груди</b>
                  <b>обхват бедер</b>
                </div>
                <div className="typesSize">
                  <h6>{obj?.[1]}</h6>
                  <span>{obj?.[2]}</span>
                  <span>{obj?.[3]}</span>
                  <span>{obj?.[4]}</span>
                </div>
              </div>
            </div>
            <div className="shadowSize"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothSize;
