import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 11rem;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  a {
    color: #fffffe;
  }
  @media (max-width: 700px) {
    img {
      margin-top: 5rem;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default Wrapper;
