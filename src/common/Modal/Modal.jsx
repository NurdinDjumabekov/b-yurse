import React, { useEffect } from "react";
import "./Modal.scss";

const Modal = ({ openModal, setOpenModal, children, title }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      console.log("Modal opened");
    } else {
      document.body.style.overflow = "visible";
      console.log("Modal closed");
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openModal]);

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;

  return (
    <div className="modal">
      <div className="modal__shadow" onClick={closeModal}></div>
      <div className="modal__inner">
        <h6>{title}</h6>
        {children}
      </div>
    </div>
  );
};

export default Modal;
