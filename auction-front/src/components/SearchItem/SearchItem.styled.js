import styled from "styled-components";
const Wrapper = styled.div`
  /* width: 65%; */
  /* min-height: 100%; */
  .all-items {
    display: flex;
    flex-direction: column;
  }
  .item-container {
    /* width: 100%; */
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .wrapper {
    width: 90%;
    margin-right: 5rem;
    margin-top: 2rem;
    box-shadow: 5px 5px 35px 3px var(--card-bg);
    transition: 0.2s;
  }
  .wrapper:hover {
    transform: scale(1.02);
  }
  .item-image {
    min-width: 100px;
    padding-top: 0.5rem;
    width: 15%;
    padding-left: 0.5rem;
  }
  .item-image img {
    width: 90%;
    box-shadow: -1px -2px 2px 1px;
  }
  .auction-details {
    width: 80%;
    padding-left: 0.5rem;
  }
  .auction-name {
    font-weight: 700;
    color: var(--card-bg);
  }
  .price {
    font-weight: 700;
    color: #534592;
    width: 25%;
    text-align: left;
  }
  .price-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .city {
    min-width: 30%;
    font-size: small;
    text-align: right;
  }
  .name {
    font-size: 1.2rem;
  }
  .seller-name {
    font-size: 0.8rem;
    color: #a69cde;
  }
  .auction-type {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
    background-color: ${(props) =>
      props.auctionType === "Kup teraz" ? "#4BC0DA" : "#FFF8AB"};
    /* to fix later (major color changes soon) */
    color: white;
    border-radius: 0.4rem;
    padding: 0.5rem;
  }
  @media (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
    .wrapper {
      width: 100%;
    }

    .name {
      font-size: 0.9rem;
    }
    .seller-name {
      font-size: 0.7rem;
    }
    .price-container {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-right: 1rem;
    }
    .price {
      width: 60%;
    }
    .city {
      margin-right: 1rem;
    }
  }
`;
export default Wrapper;
