import styled from "styled-components";

const Wrapper = styled.section`
  width: 90%;
  height: 80vh;
  /* background-color: #fff; */
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  gap: 15px;
  padding-bottom: 2rem;

  .address,
  .ship-payment-details,
  .order-summary {
    background-color: #fff;
    flex: 1;
    border-radius: 20px;
  }

  .address {
  }

  .ship-payment-details {
    display: flex;
    flex-direction: column;
    gap: 15rem;
  }

  .order-summary {
  }

  .title {
    color: var(--card-bg);
    padding: 1.2rem 0 0 0;
    font-size: 2rem;
    text-align: center;
    margin: 0;
  }
  .underline {
    width: 70%;
    margin: 0 auto;
  }
  .details {
    padding: 3rem 1rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 5px;
    grid-template-areas:
      "Imie Nazwisko"
      "Adres Adres"
      "Adres2 Adres2";
  }
  .Imie {
    grid-area: Imie;
  }

  .Nazwisko {
    grid-area: Nazwisko;
  }
  .Adres {
    grid-area: Adres;
  }
  .Adres2 {
    grid-area: Adres2;
  }
  label::after {
    content: "*";
    color: red;
  }
  .save-address {
    padding: 1rem 0 1rem 0;
    width: 200%;
  }
  .payment {
  }
  .payment-methods {
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
  }
  .one-method {
    width: 30%;
    height: 10rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .one-method img:hover {
    cursor: pointer;
  }
  .one-method img {
    padding: 0.5rem;
    width: 90%;
  }
  .clicked {
    border: 5px solid var(--card-bg);
    border-radius: 1rem;
    transition: 0.1s;
  }
  .payment-picked {
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    color: var(--card-bg);
    font-weight: 900;
  }
  .payment-picked hr {
    width: 70%;
  }
`;

export default Wrapper;