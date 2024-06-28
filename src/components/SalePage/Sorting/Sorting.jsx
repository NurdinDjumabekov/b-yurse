import React from "react";
import { useDispatch, useSelector } from "react-redux";

///// style
import "./style.scss";

///// imgs
import krestWhite from "../../../assets/icons/krestWhite.svg";

///// fns
import { activeSortingFN } from "../../../store/reducers/stateSlice";
import { activePriceFN } from "../../../store/reducers/stateSlice";
import { activeSizeFN } from "../../../store/reducers/stateSlice";
import { activeColorFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";

////// components
import Selects from "../../../common/Selects/Selects";

///// helpers
import { listSorting } from "../../../helpers/LodalData";

const Sorting = () => {
  const dispatch = useDispatch();

  const { activeBrands, activeSize } = useSelector((state) => state.stateSlice);
  const { activeCateg, activeColor } = useSelector((state) => state.stateSlice);
  const { activePrice } = useSelector((state) => state.stateSlice);

  const reset = () => {
    dispatch(activeSizeFN({ up: 0, down: 0 }));
    dispatch(activeColorFN(0));
    dispatch(activePriceFN({ min: 10, max: 12000 }));

    const { categId, type } = activeCateg;

    const obj1 = { categId, activeSize };
    const obj2 = { activeColor: 0, minPrice: 10 };
    const obj3 = { maxPrice: 12000, type, activeBrands };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const onChnage = (key, name, id) => {
    // console.log(key, name, id);
    dispatch(activeSortingFN({ name, id }));

    const { categId, type } = activeCateg;
    const obj1 = { categId, type, activeSize, sorting: id };
    const obj2 = { activeColor, minPrice: activePrice.min };
    const obj3 = { maxPrice: activePrice?.max, activeBrands };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
  };

  const check = activeColor == 0 && activeSize.up == 0 && activeSize.down == 0;

  return (
    <div className="sorting">
      {check ? (
        <div />
      ) : (
        <div className="filter" onClick={reset}>
          <p>сбросить фильтр</p>
          <button>
            <img src={krestWhite} alt="x" />
          </button>
        </div>
      )}
      <div className="selectFilter">
        <Selects
          list={listSorting}
          title={""}
          initText={"сортировка"}
          onChnage={onChnage}
          nameKey={"name"}
        />
      </div>
    </div>
  );
};

export default Sorting;
