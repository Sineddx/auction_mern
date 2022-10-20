import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  padding-bottom: 2rem;
  flex-direction: column;
  .payment-window {
    border: 0.5px solid grey;
    background-color: #fff;
    border-radius: 20px;
    width: 100%;
    font-size: 4rem;
    text-align: center;
    font-weight: 700;
  }
  .payment-btn {
    border-radius: 1rem;
  }
  .payment-btn:hover {
    transform: scale(1.02);
  }
`;

export default Wrapper;
