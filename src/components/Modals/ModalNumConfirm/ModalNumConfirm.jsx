/////hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

///fns
import { lookNumberConfFN } from "../../../store/reducers/stateSlice";

////componets
import Modal from "../../../common/Modal/Modal";

////style
import "./style.scss";

////imgs
import phone from "../../../assets/icons/phone.svg";
import { useEffect } from "react";
import { useRef } from "react";

const ModalNumConfirm = () => {
  ////// для подивердения номера (подивердение кодом)
  const dispatch = useDispatch();

  const [time, setTime] = useState(60);
  const { lookNumberConf } = useSelector((state) => state.stateSlice);

  const [code, setCode] = useState({ num1: "", num2: "", num3: "", num4: "" });

  const refs = {
    num1: useRef(null),
    num2: useRef(null),
    num3: useRef(null),
    num4: useRef(null),
  };

  const onChange = () => {};

  const sendNums = () => {
    if (time === 0) {
      //// отправка номера еше раз
      setTime(60);
      dispatch(lookNumberConfFN(true));
    } else {
      if (checkNums) {
        dispatch(lookNumberConfFN(false));
      }
    }
  };

  useEffect(() => {
    if (lookNumberConf) {
      setTime(60); // сброс таймера до 60 секунд при открытии модального окна
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // очистка таймера при размонтировании компонента или изменении lookNumberConf
    }
  }, [lookNumberConf]);

  const handleInputChange = (name, value) => {
    if (/^\d*$/.test(value)) {
      setCode((prevCode) => ({ ...prevCode, [name]: value }));

      if (value !== "") {
        switch (name) {
          case "num1":
            refs.num2.current.focus();
            break;
          case "num2":
            refs.num3.current.focus();
            break;
          case "num3":
            refs.num4.current.focus();
            break;
          default:
            break;
        }
      }
    }
  };

  const handleKeyPress = (name, key) => {
    if (key === "Backspace" && code[name] === "") {
      switch (name) {
        case "num4":
          refs.num3.current.focus();
          break;
        case "num3":
          refs.num2.current.focus();
          break;
        case "num2":
          refs.num1.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const nums = `${code?.num1}${code?.num2}${code?.num3}${code?.num4}`;

  const checkNums = nums?.length == 4;

  return (
    <Modal
      openModal={lookNumberConf}
      setOpenModal={() => dispatch(lookNumberConfFN())}
      title={"Мой аккаунт"}
    >
      <div className="modalNumConf">
        <h4>Код подтверждения</h4>
        <div className="inputs">
          <input
            type="text"
            placeholder="_"
            maxLength={1}
            onChange={(e) => handleInputChange("num1", e.target.value)}
            onKeyDown={(e) => handleKeyPress("num1", e.nativeEvent.key)}
            ref={refs.num1}
            value={code?.num1}
          />
          <input
            type="text"
            placeholder="_"
            maxLength={1}
            onChange={(e) => handleInputChange("num2", e.target.value)}
            onKeyDown={(e) => handleKeyPress("num2", e.nativeEvent.key)}
            ref={refs.num2}
            value={code?.num2}
          />
          <input
            type="text"
            placeholder="_"
            maxLength={1}
            onChange={(e) => handleInputChange("num3", e.target.value)}
            onKeyDown={(e) => handleKeyPress("num3", e.nativeEvent.key)}
            ref={refs.num3}
            value={code?.num3}
          />
          <input
            type="text"
            placeholder="_"
            maxLength={1}
            onChange={(e) => handleInputChange("num4", e.target.value)}
            onKeyDown={(e) => handleKeyPress("num4", e.nativeEvent.key)}
            ref={refs.num4}
            value={code?.num4}
          />
        </div>
        <button
          className={`choiceCloth ${checkNums && "active"}`}
          onClick={sendNums}
        >
          {time === 0 ? (
            <span>Повторить отправку</span>
          ) : (
            <span>Проверить мой код</span>
          )}
          <img src={phone} alt="0" />
        </button>
        <p>повторно запросить через {time} секунд</p>
      </div>
    </Modal>
  );
};

export default ModalNumConfirm;
