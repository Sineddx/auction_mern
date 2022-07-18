import logo from "../assets/images/logo_transparent.png";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <Wrapper className="wrapper">
      <div className="custom">
        <div>
          <img className="service-logo" src={logo} alt="Logo" />
        </div>
        <div className="searchbar">
          <input />
        </div>
        <div className="user-panel">
          <div className="account" onClick={toggleMenu}>
            <p>Moje konto</p>
          </div>

          <div className={`user-options ${show && "show"}`}>
            <button>Zaloguj się</button>
            <p>
              Nie posiadasz konta? <a href="#">Zarejestruj się </a>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--card-bg);
  width: 100vw;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .user-options {
    border: 0.5px solid black;
    background-color: white;
    position: fixed;
    right: 13%;
    padding: 1rem 2rem;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  .user-options.show {
    display: block;
    opacity: 1;
  }
  .user-options a,
  p {
    font-size: 0.7rem;
  }
  .user-options button {
    display: flex;
  }
  .custom {
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    padding-top: 3rem;
  }

  .user-panel {
    color: yellow;
  }
  .service-logo {
    max-width: 200px;
    max-height: 150px;
    position: relative;
  }
  .account {
    padding: 0 1rem;
    color: var(--card-bg);
    background-color: #abd1c6;
    cursor: pointer;
    border-radius: 2rem;
  }
  .account p::after {
    content: " ⇣";
  }
  @media (max-width: 700px) {
    width: 100%;
    .custom {
      flex-direction: column;
      padding-right: 0;
      padding-bottom: 2rem;
      padding-top: 1rem;
    }
    .user-panel {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 2rem;
      margin-top: 3rem;
    }
  }
`;
export default Header;
