import styled from "styled-components";
const Wrapper = styled.section`
  margin: 1rem auto 0 auto;
  width: 65%;
  min-height: 100%;
  .filter-area {
    width: 100%;
    background-color: #fff;
    display: grid;
    padding: 0.5rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .clear-values {
    background-color: var(--green-dark);
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;
export default Wrapper;