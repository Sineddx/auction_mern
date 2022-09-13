import styled from "styled-components";
const Wrapper = styled.section`
  .ChatBox-container {
    background: var(--cardColor);
    border-radius: 1rem;
    display: grid;
    grid-template-rows: 10vh 60vh 10vh;
    margin-bottom: 2rem;
  }

  .chat-header {
    padding: 1rem 1rem 0rem 1rem;
    display: flex;
    flex-direction: column;
  }

  .chat-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    overflow: auto;
  }

  .message {
    background: grey;
    color: white;
    padding: 0.7rem;
    border-radius: 1rem 1rem 1rem 0;
    max-width: 28rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .message > span:nth-child(2) {
    font-size: 0.7rem;
    color: var(--textColor);
    align-self: end;
  }

  .own {
    align-self: flex-end;
    border-radius: 1rem 1rem 0 1rem;
    background: #6e60b3;
    /* background: linear-gradient(98.63deg, #534592 0%, #24e4f0 100%); */
    /* background: linear-gradient(98.63deg,  5%, #6e60b3 70%); */
  }

  .chat-sender {
    background: white;
    display: flex;
    justify-content: space-between;
    height: 6rem;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    border-radius: 1rem;
    align-self: end;
  }
  .chat-sender > input {
    /* border: 1px solid green;
    height: 90%;
    background-color: rgb(236, 236, 236);
    border-radius: 0.5rem;
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
    padding: 0px 15px 0px 15px; */
  }

  /* .chat-sender > div {
    height: 70%;
    padding: 0px 15px 0px 15px;
  } */
  .btn-send {
    padding: 1rem 1rem 1rem 1rem;
  }
  .name {
    display: flex;
    justify-content: center;
  }
`;
export default Wrapper;

/* .chat-sender > div:nth-of-type(1) {
    background: rgb(233, 233, 233);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  } */
