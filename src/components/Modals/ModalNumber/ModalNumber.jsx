/////hooks
import { useDispatch, useSelector } from "react-redux";

///...fns
import { lookNumberFN, numberUserFN } from "../../../store/reducers/stateSlice";
import { lookNumberConfFN } from "../../../store/reducers/stateSlice";

////componets
import Modal from "../../../common/Modal/Modal";
import InputMask from "react-input-mask";

////style
import "./style.scss";

////imgs
import { tranformNumber } from "../../../helpers/tranformNumber";
import { sendNumberFN } from "../../../store/reducers/requestSlice";

const ModalNumber = () => {
  const dispatch = useDispatch();

  const { lookNumber, numberUser } = useSelector((state) => state.stateSlice);

  const sendNums = () => {
    if (tranformNumber(numberUser)?.length === 11) {
      dispatch(sendNumberFN(numberUser));
      dispatch(lookNumberFN(false)); ////// закрываю модалку для ввода номера (логин)
      dispatch(lookNumberConfFN(true)); ////// открываю подтверждение номера
    } else {
      alert("Введен некорректный номер телефона");
    }
  };

  return (
    <div className="parentNums">
      <Modal
        openModal={lookNumber}
        setOpenModal={() => dispatch(lookNumberFN())}
      >
        <div className="modalNum">
          <p>Напишите код подтверждения, отправленный на номер телефона</p>
          <InputMask
            mask="+9 999 999-99-99"
            placeholder="+7 937 475-75-95"
            name="number"
            onChange={(e) => dispatch(numberUserFN(e.target.value))}
            value={numberUser}
          />
          <button onClick={sendNums}>Подтвердить код</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalNumber;
