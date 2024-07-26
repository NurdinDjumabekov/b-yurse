////hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////style
import "./style.scss";

////fns
import { getListCloth } from "../../../store/reducers/requestSlice";

////components
import Sorting from "../Sorting/Sorting";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

const ClothList = () => {
  const dispatch = useDispatch();

  const { listCloth } = useSelector((state) => state.requestSlice);

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);

  useEffect(() => {
    const obj1 = { categId: activeCateg?.categId, type: activeCateg?.type };
    const obj2 = { activeColor, minPrice: activePrice.min, activeSize };
    const obj3 = { maxPrice: activePrice?.max, activeBrands };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
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
