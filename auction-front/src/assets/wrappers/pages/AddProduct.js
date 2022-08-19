import styled from "styled-components";

const Wrapper = styled.section`
  .prod-description {
    width: 900px;
  }
  .buttons {
    display: flex;
    justify-content: center;
  }
  .form {
    border-top: 5px solid var(--card-bg);
  }
  .buttons button {
    margin-left: 0.3rem;
  }
  .btn-clear {
    background-color: #e16162;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--card-bg);
  }
  p {
    text-align: center;
  }
`;

export default Wrapper;
