import Wrapper from "./Modal.styled";
import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
import NavLinks from "./NavLinks/NavLinks";

const modalRoot = document.getElementById("root-portal");
const Modal = ({ close, show }) => {
  const [hide, setHide] = useState(false);
  const closeIt = () => {
    setHide(true);
    close();
  };
  const modalRef = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeIt();
      } else {
        return;
      }
    };

    document.body.addEventListener("click", closeModal);
    return () => document.body.removeEventListener("click", closeModal);
  }, []);
  return ReactDOM.createPortal(
    <Wrapper ref={modalRef}>
      <div className={`${hide ? "sidenav hide" : "sidenav"}`}>
        <div className="modal-content">
          <NavLinks toggleMenu={closeIt} />
          <div className="modal-footer">
            <button className="closeBtn" onClick={closeIt}>
              X
            </button>
          </div>
        </div>
      </div>
    </Wrapper>,
    modalRoot
  );
};

export default Modal;
