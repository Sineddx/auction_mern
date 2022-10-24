import styled from "styled-components";

const Wrapper = styled.div`
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .payment-window {
    background-color: #fff;
    width: 80%;
    margin: 3rem auto;
    padding: 4rem;
    gap: 1rem;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 35px 3px var(--card-bg);
  }
  .payment-window input {
    margin: 0 auto;
    width: 50%;
    text-align: center;
  }
  .btn-payment {
    border-radius: 1rem;
    width: 60%;
    margin: 0 auto;
  }
  .btn-payment:hover {
    transform: scale(1.02);
  }
  .disabled {
    background-color: grey;
  }
  .disabled:hover {
    transform: scale(1);
  }
  .error-message {
  }
  @media (max-width: 768px) {
    .payment-window {
      font-size: 1.2rem;
    }
    .payment-window p {
      font-size: 0.8rem;
    }
    .payment-window input {
      font-size: 1rem;
      width: 100%;
    }
  }
`;

export default Wrapper;
