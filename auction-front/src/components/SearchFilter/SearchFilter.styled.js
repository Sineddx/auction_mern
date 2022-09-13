import styled from "styled-components";
const Wrapper = styled.section`
  margin: 0.8rem 0.8rem 0 15%;
  width: 15%;
  .filter-area {
    /* width: 100%; */
    background-color: #fff;
    display: grid;
    padding: 0.5rem;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .clear-values {
    background-color: var(--card-bg);
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
  }
`;
export default Wrapper;
