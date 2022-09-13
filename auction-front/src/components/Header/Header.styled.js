import styled from "styled-components";
const Wrapper = styled.div`
  background: var(--card-bg);
  width: 100vw;
  min-width: 100vw;
  top: 0;
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
    padding-top: 2rem;
  }

  .user-panel {
    color: yellow;
    display: flex;
    gap: 5px;
  }
  .service-logo {
    max-width: 200px;
    max-height: 150px;
    position: relative;
  }
  .account {
    /* box-shadow: 0rem 0.2rem 0.8rem 0.1rem gold; */
    padding: 0 1rem;
    color: var(--main-bg);
    background-color: #534592;
    cursor: pointer;
    border-radius: 2rem;
    width: auto;
    height: 2.2rem;
    display: flex;
    align-content: center;
    text-transform: uppercase;
    font-weight: 1000;
    transition: transform 0.2s;
  }
  .account:hover {
    transform: scale(1.1);
  }
  .account p::after {
    content: " ⬅";
  }

  .inputfield {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    border: none;
    text-align: center;
    font-size: 1.2rem;
  }
  .searchbar {
    width: 30%;
    height: 5vh;
    transition: transform 0.1s;
  }
  .search-form {
    height: 100%;
  }
  .searchbar:hover {
    transform: scale(1.03);
  }
  @media (max-width: 700px) {
    .custom {
      flex-direction: column;

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
    .account {
      display: none;
    }

    .hamburger {
      top: 50%;
      left: 10%;
      width: 50px;
      height: 6px;
      background: #fcfcfc;
      position: absolute;
      /* box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2); */
      transition: 0.5s;
    }
    .hamburger:before {
      top: -16px;
    }

    .hamburger:after {
      top: 16px;
    }
    .icon-one {
      position: absolute;
      top: -50px;
      left: -50px;
      padding: 0 1rem;
      width: 50px;
      height: 100px;
      cursor: pointer;
    }
    .hamburger-one:before,
    .hamburger-one:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 6px;
      background: #fcfcfc;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    .icon-one.active-one .hamburger-one {
      background: rgba(0, 0, 0, 0);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
    }

    .icon-one.active-one .hamburger-one:before {
      top: 0;
      transform: rotate(45deg);
    }

    .icon-one.active-one .hamburger-one:after {
      top: 0;
      transform: rotate(135deg);
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    .searchbar {
      min-width: 65%;
    }
    .inputfield {
      font-size: 0.8rem;
    }
  }
`;
export default Wrapper;
