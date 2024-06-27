///hooks
import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

///style
import "./style.scss";

////fns
import { activeSizeEveryFN } from "../../../store/reducers/stateSlice";
import { activeSizeFN, lookSizeFN } from "../../../store/reducers/stateSlice";

//////helpers
import { getListCloth } from "../../../store/reducers/requestSlice";
///// delete
import { arrSizeRow, arrSizeTable } from "../../../helpers/LodalData";
import { texxtSize1, texxtSize2 } from "../../../helpers/LodalData";

const ClothSize = ({ oneCodeId, choiceEvery, listEvery }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { lookSize } = useSelector((state) => state.stateSlice);
  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeSizeEvery } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);

  // const { listSize } = useSelector((state) => state.requestSlice);

  const clickListMan = (id) => {
    dispatch(activeSizeFN(id));

    const { categId, type } = activeCateg;
    const obj1 = { categId, type, activeSize: id, activeBrands };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const choiceForBasket = (id) => dispatch(activeSizeEveryFN(id));

  const lookSizeCloth = (bool) => dispatch(lookSizeFN(bool));

  const checkPage = pathname?.includes("every");
  //// if это детальная страница

  ////////////////////////////////////// delete
  const listSize = [
    { id: 1, sizeName: "S" },
    { id: 2, sizeName: "M" },
    { id: 3, sizeName: "L" },
    { id: 4, sizeName: "XL" },
    { id: 5, sizeName: "XXL" },
  ];

  const obj = {
    1: "RS1",
    2: "777-777",
    3: "777-777",
    4: "777-777",
  };

  return (
    <div className="sizeParent">
      <div className="mainTitle">
        <h3>Размерная сетка (верх)</h3>
      </div>
      <ul className="listSize">
        {listSize?.map((item) => (
          <li key={item?.id} onClick={() => clickListMan(item.id)}>
            <p className={activeSize == item.id ? "activeItem" : ""}>
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
