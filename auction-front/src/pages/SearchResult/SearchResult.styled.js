import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  .results-number {
    margin: 1rem auto;
    text-align: center;
    //display: none;
  }
  .no-products{
    padding-top: 1.5rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export default Wrapper;
