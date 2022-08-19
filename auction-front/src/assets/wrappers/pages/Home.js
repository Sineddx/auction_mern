import styled from "styled-components";

const Wrapper = styled.section`
  .center-page {
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .serwis {
    color: gold;
  }
  .main-photo {
    max-width: 700px;
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    text-align: center;
    color: var(--textColor);
    font-weight: 600;
    font-size: xx-large;
  }
  @media (max-width: 700px) {
    .center-page {
      margin-top: 1rem;
    }
    .description {
      font-size: 1.9rem;
      margin-bottom: 2rem;
    }
    .main-photo {
      max-width: 450px;
    }
  }
  @media (max-width: 500px) {
    align-items: center;
    .main-photo {
      max-width: 300px;
    }
    .description {
      font-size: 1.2rem;
    }
  }
`;
export default Wrapper;
