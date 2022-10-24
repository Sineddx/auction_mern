import styled from "styled-components";

const Wrapper = styled.section`
  .center-page {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .main-photo {
    max-width: 500px;
    margin-right: 2rem;
  }

  .half {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .big-image {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .add-auction-home {
    margin-left: 8rem;
    border-top-left-radius: 50px 100px;
    border-top-right-radius: 50px 100px;
    border-bottom-left-radius: 50px 100px;
    border-bottom-right-radius: 50px 100px;
    width: 30rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 1.8rem;
    box-shadow: 0px 0px 10px 5px var(--card-bg);
  }
  .add-auction-home:hover {
    color: var(--card-bg);
    background-color: var(--card-bg) 0.9;
  }
  .single-category {
    padding-top: 0.5rem;
    background-color: #fff;
    align-items: center;
    display: flex;
    width: 20%;
    flex-direction: column;
    color: var(--card-bg);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 5px 5px 35px 3px var(--card-bg);
  }
  .single-category:hover {
    opacity: 0.65;
    transform: scale(1.05);
  }
  .for-image {
    width: 30%;
  }
  .single-category img {
    width: 100%;
  }

  @media (max-width: 1400px) {
    .center-page {
      margin-top: 1rem;
      flex-direction: column;
    }
    .main-photo {
      display: none;
    }
    .big-image {
    }
    .add-auction-home {
      margin: 1.5rem 0 1rem 0;
    }
    .half {
      justify-content: center;
    }
    .single-category {
      width: 40%;
    }
  }
`;
export default Wrapper;
