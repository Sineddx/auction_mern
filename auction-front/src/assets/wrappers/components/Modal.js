import styled from "styled-components";
const Wrapper = styled.div`
  .modal-body {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: xx-large;
    padding-top: 8.5rem;
  }
  .modal-body a {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: opacity 0.3s ease;
    color: #001e1d;
    border-top: 1px solid #004643;
  }
  .modal-body a:hover {
    opacity: 0.7;
  }

  @keyframes example {
    from {
      /* width: 0; */
      transform: translateX(300px);
      opacity: 0;
    }
    to {
      opacity: 0.8;
      transform: translateX(0px);
      /* width: 400px; */
    }
  }
  @keyframes example2 {
    from {
      transform: translateX(0px);
      opacity: 0.8;
    }
    to {
      transform: translateX(300px);
      opacity: 0;
    }
  }
  .sidenav {
    height: 100%;
    display: flex;
    justify-content: center;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #fffffe;
    overflow-x: hidden;
    padding-top: 60px;
    transition: width 0.3s;
    animation-name: example;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    border-left: 1px solid #001e1d;
    border-top: 1px solid #001e1d;
    border-right: 1px solid #001e1d;
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
    color: #001e1d;
  }

  .sidenav li:hover {
    opacity: 0.7;
  }
  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1rem;
    margin-top: 2rem;
    font-size: 3rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: var(--card-bg);
    background-color: #fffffe;
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
export default Wrapper;
