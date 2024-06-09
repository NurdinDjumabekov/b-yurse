import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

/////imgs
import krest from "../../../assets/icons/krest.svg";
import aroow from "../../../assets/icons/aroow.svg";

/////fns
import { activePriceFN } from "../../../store/reducers/stateSlice";
import { activeBrandsFN } from "../../../store/reducers/stateSlice";
import { activeSizeFN } from "../../../store/reducers/stateSlice";
import { activeColorFN } from "../../../store/reducers/stateSlice";
import { activeCategFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

const Sorting = () => {
  const dispatch = useDispatch();

  const { activeBrands, activeSize } = useSelector((state) => state.stateSlice);
  const { activeCateg, activeColor } = useSelector((state) => state.stateSlice);

  const reset = () => {
    dispatch(activeCategFN({ categId: 0, type: 0 }));
    dispatch(activeSizeFN(0));
    dispatch(activeColorFN(0));
    dispatch(activePriceFN({ min: 10, max: 12000 }));
    dispatch(activeBrandsFN(0));

    //////
    const obj1 = { categId: 0, activeSize: 0 };
    const obj2 = { activeColor: 0, minPrice: 10 };
    const obj3 = { maxPrice: 12000, type: 0, activeBrands: 0 };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const check = activeBrands == 0 && activeColor == 0 && activeSize == 0;
  const checkMore = activeCateg?.categId == 0 && activeCateg?.type == 0;

  return (
    <div className="sorting">
      {check && checkMore ? (
        <div />
      ) : (
        <div className="filter" onClick={reset}>
          <p>сбросить фильтр</p>
          <button>
            <img src={krest} alt="x" />
          </button>
        </div>
      )}
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
