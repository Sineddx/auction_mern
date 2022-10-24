import styled from "styled-components";

const Wrapper = styled.section`
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  .item-container {
    display: flex;
    justify-content: center;
    width: 70%;
    background-color: var(--main-bg);
    height: 70%;
    gap: 20px;
  }
  .gallery {
    flex: 1;
    box-shadow: 5px 5px 35px 3px var(--card-bg);
    min-width: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-info {
    box-shadow: 5px 5px 35px 3px var(--card-bg);
    flex: 1;
    background-color: #fff;
  }
  .seller {
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .seller-name-container {
    padding-top: 0.2rem;
    display: flex;
    align-items: center;
    width: 50%;
    cursor: pointer;
    transition: all 0.1s;
  }
  .seller-name-container:hover {
    transform: scale(1.02);
  }
  .seller-avatar {
    width: 30%;
  }
  .seller-avatar img {
    width: 100%;
  }
  .offer-name {
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 1rem;
    font-weight: 600;
  }
  .offer-price {
    margin-top: 1rem;
    font-size: 1.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    flex-direction: column;
  }
  .item-description {
    margin-top: 0.5rem;
    padding: 0 1rem;
    height: 30vh;
    overflow: auto;
    text-align: left;
  }
  .options {
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-content: flex-end;
  }
  .quantity-options {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .quantity-options .quantity-text {
    flex: 1;
    text-align: right;
    font-size: 1rem;
  }
  .quantity {
    flex: 1;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }
  .quantity input {
    margin: 0 0.2rem;
    width: 30%;
    text-align: center;
  }
  .availability {
    flex: 1;
    text-align: left;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    .item-container {
      flex-direction: column;
      width: 95%;
    }
    .gallery {
      padding-top: 0.5rem;
    }
    .offer-price {
      font-size: 1rem;
    }
    .call-seller {
      font-size: 0.72rem;
    }
    .seller {
      padding-left: 1rem;
    }
  }
`;
export default Wrapper;
