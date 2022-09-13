import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  .results-number {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    display: none;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export default Wrapper;
