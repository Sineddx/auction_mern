import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--card-bg);
  width: 100vw;

  .custom {
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    padding-top: 3rem;
  }

  .user-panel {
    color: yellow;
  }
  .service-logo {
    max-width: 200px;
    max-height: 150px;
    position: relative;
  }
  @media (max-width: 700px) {
    width: 100%;
    .custom {
      flex-direction: column;
      padding-right: 0;
      padding-bottom: 2rem;
      padding-top: 1rem;
    }
    .user-panel {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 2rem;
      margin-top: 3rem;
    }
  }
`;

export default Wrapper;
