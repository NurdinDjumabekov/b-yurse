////// hooks
import { useDispatch, useSelector } from "react-redux";

////// imgs
import arrow from "../../../assets/icons/arrowRightTregBlack.svg";
import deleteImg from "../../../assets/icons/delete.svg";

////// components
import { deleteProdBasket } from "../../../store/reducers/saveDataSlice";
import { addProdBasket } from "../../../store/reducers/saveDataSlice";
import { removeProdBasket } from "../../../store/reducers/saveDataSlice";

/////// helpers
import { sarchImg } from "../../../helpers/sarchImg";

////// style
import "./style.scss";
import Favourite from "../../../common/Favourite/Favourite";
import ClothColor from "../../SalePage/ClothColor/ClothColor";
import ClothSize from "../../SalePage/ClothSize/ClothSize";

const EveryBasket = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="basket__every">
      <div className="basket__child">
        <div className="mainImg">
          <img src={sarchImg(item?.photos)?.url} alt="" />
        </div>
        <div className="dopContant">
          <h5>{item?.productName}</h5>
          <p>{item?.price} ₽</p>

          <div className="colors-size">
            <ClothSize
              typeSize={"up"}
              activeSizeProps={item?.activeSizeEvery}
            />
            <ClothColor activeColorProps={item?.activeColorEvery} />
          </div>

          <h6>Количество</h6>
          <div className="counterBlock">
            <span>{item?.count}</span>
            <div className="actions">
              <button
                className="plus"
                onClick={() => dispatch(addProdBasket(item))}
              >
                <img src={arrow} alt="+" />
              </button>
              <button
                className="minus"
                onClick={() => dispatch(removeProdBasket(item))}
              >
                <img src={arrow} alt="-" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="actionsCloth">
        <Favourite obj={item} />
        <button onClick={() => dispatch(deleteProdBasket(item))}>
          <img src={deleteImg} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default EveryBasket;
