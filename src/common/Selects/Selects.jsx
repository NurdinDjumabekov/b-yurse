import React, { useRef, useState } from "react";
import img from "../../assets/icons/arrowBlack.svg";
import "./style.scss";

///// только для сортировки на главной странице
import aroow from "../../assets/icons/aroow.svg";

const Selects = (props) => {
  const { list, title, initText } = props;
  const { onChnage, nameKey } = props;

  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);
  const accordionRef = useRef(null);

  React.useEffect(() => {
    const handleChange = (e) => {
      if (
        active &&
        accordionRef.current &&
        !accordionRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleChange);

    return () => {
      document.removeEventListener("click", handleChange);
    };
  }, [active]);

  const clickSelect = (id, name) => {
    setActive(false);
    setId(id);
    onChnage(nameKey, name, id);
  };

  const textSelect = list?.find((i) => i.id === id);

  return (
    <div className="selectBlockMain">
      <h5>{title}</h5>
      <div className="selectBlock" id="uniqueSelectID" ref={accordionRef}>
        <div
          className={`selectBlock__inner ${active && "more"}`}
          onClick={() => setActive(!active)}
        >
          <p className={textSelect ? "activeText" : ""}>
            {textSelect ? textSelect?.name : initText}
          </p>
          <img src={img} alt="<" className={active ? "rotate180" : "rotate0"} />

          {/* ///// только для сортировки на главной странице */}
          <img
            src={aroow}
            alt="<"
            className={active ? "rotate180More" : "rotate0More"}
          />
        </div>
        {active && (
          <div className="selectBlock__activeBlock">
            {list?.map((i) => (
              <p onClick={() => clickSelect(+i?.id, i?.name)} key={i.id}>
                {i?.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selects;
