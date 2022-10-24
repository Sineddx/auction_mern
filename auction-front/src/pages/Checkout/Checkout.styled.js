import styled from "styled-components";

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  gap: 25px;
  padding-bottom: 2rem;

  .address,
  .ship-payment-details,
  .order-summary {
    box-shadow: 0px 0px 35px 3px var(--card-bg);
    background-color: #fff;
    flex: 1;
    border-radius: 20px;
  }

  .address {
  }

  .ship-payment-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    padding: 1rem 1rem 0 1rem;
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
  .label-edit::after {
    content: "*";
    color: red;
  }
  .buttons-container {
    /* padding-top: 1rem; */
    display: flex;
    width: 100%;
    gap: 5px;
    padding: 1rem 1rem 1rem 1rem;
  }
  .save-address {
    padding: 1rem 0.5rem 1rem 0.5rem;
    flex: 1;
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
  .auction-details {
    display: flex;
    padding: 3rem 1rem 0 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .auction-details img {
    width: 100%;
  }
  .auction-image {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
  }
  .auction-desc {
    width: 100%;
    text-align: left;
  }
  .row {
    font-weight: 800;
    padding: 1rem 2rem 0 2rem;
    display: flex;
    justify-content: space-between;
  }
  .row div {
    color: var(--card-bg);
    min-width: 8rem;
    text-align: center;
  }
  .my-addresses-title {
    margin-bottom: -2rem;
    text-align: center;
  }
  .addresses-list {
    width: 60%;
    margin: 0 auto;
  }
  .btn-payment {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem 0.5rem 1rem 0.5rem;
    text-align: center;
  }
  .courier-pick {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 1122px) {
    flex-direction: column;
    .buttons-container {
      width: 100%;
    }
  }
  @media (max-width: 612px) {
    .buttons-container {
      width: 100%;
    }
    .details {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
