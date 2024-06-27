////hooks
import { useDispatch, useSelector } from "react-redux";

////style
import "./style.scss";

/////components
import ClothSize from "../ClothSize/ClothSize";
import ClothPrices from "../ClothPrices/ClothPrices";
import ClothColor from "../ClothColor/ClothColor";

///////fns
import { activeCategFN } from "../../../store/reducers/stateSlice";
import { activeBrandsFN } from "../../../store/reducers/stateSlice";
import { getListCloth } from "../../../store/reducers/requestSlice";
import CategCloth from "../CategCloth/CategCloth";

const ClothTypes = () => {
  const dispatch = useDispatch();

  // const { categClothWoman } = useSelector((state) => state.requestSlice);
  // const { categClothMan } = useSelector((state) => state.requestSlice);
  // const { listBrands, listCloth } = useSelector((state) => state.requestSlice);

  const { activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);

  const onUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actionBrands = (id) => {
    dispatch(activeBrandsFN(id));
    dispatch(activeCategFN({ categId: 0, type: 0 }));
    const obj1 = { categId: 0, type: 0 };
    const obj2 = { activeColor, minPrice: activePrice.min, activeSize };
    const obj3 = { maxPrice: activePrice?.max, activeBrands: id };
    dispatch(getListCloth({ ...obj1, ...obj2, ...obj3 }));
    window.scrollTo(0, 0);
  };

  ////////////////////////////////// delete
  const listCloth = [];

  const categClothWoman = [
    { id: 1, categoryName: "Футболки" },
    { id: 2, categoryName: "Рубашки" },
    { id: 3, categoryName: "Брюки" },
    { id: 4, categoryName: "Джинсы" },
    { id: 5, categoryName: "Куртки" },
    { id: 6, categoryName: "Шорты" },
    { id: 7, categoryName: "Костюмы" },
    { id: 8, categoryName: "Толстовки" },
    { id: 9, categoryName: "Спортивные костюмы" },
    { id: 10, categoryName: "Пиджаки" },
  ];

  const categClothMan = [
    { id: 1, categoryName: "Футболки" },
    { id: 2, categoryName: "Рубашки" },
    { id: 3, categoryName: "Брюки" },
    { id: 4, categoryName: "Джинсы" },
    { id: 5, categoryName: "Куртки" },
    { id: 6, categoryName: "Шорты" },
    { id: 7, categoryName: "Костюмы" },
    { id: 8, categoryName: "Толстовки" },
    { id: 9, categoryName: "Спортивные костюмы" },
    { id: 10, categoryName: "Пиджаки" },
  ];

  const listBrands = [
    { id: 1, collectionName: "Nike" },
    { id: 2, collectionName: "Adidas" },
    { id: 3, collectionName: "Puma" },
    { id: 4, collectionName: "Reebok" },
    { id: 5, collectionName: "Under Armour" },
  ];

  ////////////////////////////////////

  const lengthTen = listCloth?.length > 9;

  return (
    <div className="clothTypes">
      <div className="clothTypes__inner">
        <ul className="listTypes brands">
          {listBrands?.map((item) => (
            <li
              key={item?.id}
              className={activeBrands == item?.id ? "activeItem" : ""}
              onClick={() => actionBrands(item?.id)}
            >
              <p>{item?.collectionName}</p>
            </li>
          ))}
        </ul>
        <CategCloth
          list={categClothWoman}
          typeTitle={2}
          typeSex={"Женская одежда"}
        />
        <CategCloth
          list={categClothMan}
          typeTitle={1}
          typeSex={"Мужская одежда"}
        />
        <div className="position">
          <ClothSize />
        </div>
        <ClothColor />
      </div>
      <ClothPrices />
      {lengthTen && (
        <button className="onUp" onClick={onUp}>
          Подняться наверх
        </button>
      )}
    </div>
  );
};

export default ClothTypes;
