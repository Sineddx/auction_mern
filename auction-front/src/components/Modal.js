import styled from "styled-components";
import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
import { BiLogIn, BiRegistered } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";

const modalRoot = document.getElementById("root-portal");
const Modal = ({ close, show }) => {
  const [hide, setHide] = useState(false);
  const closeIt = () => {
    setHide(true);
    setTimeout(() => {
      close();
    }, 300);
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
          <div className="modal-header">
            <h4 className="modal-title">Panel sterowania</h4>
          </div>
          <div className="modal-body">
            <div>
              <BiLogIn />
              Zaloguj
            </div>
            <div>
              <BiRegistered />
              Zarejestruj
            </div>
            <div>
              <MdContactSupport />
              Kontakt
            </div>
          </div>
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

const Wrapper = styled.div`
  .modal-title {
    color: #f1f1f1;
    padding-top: 5rem;
  }
  .modal-body {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: xx-large;
  }
  .modal-body div {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  .modal-body div:hover {
    opacity: 0.7;
  }
  @keyframes example {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      opacity: 0.8;
      width: 500px;
    }
  }
  @keyframes example2 {
    from {
      width: 500px;
      opacity: 0.8;
    }
    to {
      width: 0;
      opacity: 0;
    }
  }
  .sidenav {
    height: 100%;
    display: flex;
    justify-content: center;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: var(--card-bg);
    overflow-x: hidden;
    padding-top: 60px;
    transition: width 0.3s;
    animation-name: example;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
  .hide {
    animation-name: example2;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }

  .sidenav li {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 25px;
    color: #fff;
    display: block;
    transition: all 0.2s;
    cursor: pointer;
  }

  .sidenav li:hover {
    opacity: 0.7;
  }
  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 4rem;
    margin-top: 4rem;
    font-size: 3rem;
    border-radius: 50%;
    border: none;
    background-color: #e16162;
    cursor: pointer;
    color: var(--card-bg);
    transition: opacity 0.3s;
  }
  .closeBtn:hover {
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    @keyframes example {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        opacity: 0.8;
        width: 100%;
      }
    }
  }
`;
export default Modal;
