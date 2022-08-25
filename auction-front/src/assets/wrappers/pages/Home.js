import styled from "styled-components";

const Wrapper = styled.section`
  .center-page {
    margin-top: 10rem;
    display: flex;
    justify-content: center;
  }

  .main-photo {
    max-width: 600px;
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
    gap: 10px;
    justify-content: center;
  }
  .big-image {
    display: flex;
    justify-content: center;
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

  @media (max-width: 700px) {
    .center-page {
      margin-top: 1rem;
      flex-direction: column;
    }
    .main-photo {
      max-width: 300px;
    }
    .big-image {
      margin-top: 1rem;
      margin-bottom: 2rem;
      justify-content: center;
    }
    .single-category {
      width: 40%;
    }
  }
`;
export default Wrapper;
