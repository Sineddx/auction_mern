import styled from "styled-components";
const Wrapper = styled.section`
  margin: 2rem 1rem 0 15%;
  min-width: 15%;

  .filter-area {
     //width: 100%; 
    background-color: #fff;
    display: grid;
    padding: 0.5rem;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
    box-shadow: 5px 5px 35px 3px var(--card-bg);
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
    padding-top: 1rem;
  }
`;
export default Wrapper;
