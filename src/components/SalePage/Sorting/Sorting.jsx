import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

/////imgs
import krest from "../../../assets/icons/krest.svg";
import aroow from "../../../assets/icons/aroow.svg";
import {
  activeCategFN,
  activeColorFN,
  activePriceFN,
  activeSizeFN,
} from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

const Sorting = () => {
  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);

  const reset = () => {
    dispatch(activeCategFN({ categId: 1, type: 2 }));
    dispatch(activeSizeFN(1));
    dispatch(activeColorFN(1));
    dispatch(activePriceFN({ min: 10, max: 12000 }));

    //////
    const obj1 = { categId: 1, activeSize: 1 };
    const obj2 = { activeColor: 1, minPrice: 10 };
    const obj3 = { maxPrice: 12000, type: 2 };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  return (
    <div className="sorting">
      <div className="filter" onClick={reset}>
        <p>сбросить фильтр</p>
        <button>
          <img src={krest} alt="x" />
        </button>
      </div>
      <div className="filter">
        <p>сортировка</p>
        <button>
          <img src={aroow} alt=">" />
        </button>
      </div>
    </div>
  );
};

export default Sorting;
