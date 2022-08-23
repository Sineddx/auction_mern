import styled from "styled-components";
const Wrapper = styled.section`
  .Chat {
    position: relative;
    display: grid;
    grid-template-columns: 22% auto;
    gap: 1rem;
  }

  .Left-side-chat {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Chat-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--cardColor);
    border-radius: 1rem;
    padding: 1rem;
    height: auto;
    min-height: 80vh;
    overflow: scroll;
  }

  .Chat-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Right-side-chat {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .conversation:hover {
    background: #80808038;
    cursor: pointer;
  }

  .conversation {
    border-radius: 0.5rem;
    padding: 10px;
  }
  .conversation > div {
    position: relative;
  }

  .online-dot {
    background-color: greenyellow;
    border-radius: 50%;
    position: absolute;
    left: 2rem;
    width: 1rem;
    height: 1rem;
  }

  .chatbox-empty-message {
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 20px;
  }
  .user-data {
    display: flex;
  }
  .name {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
  }
  .name :first-child {
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    .Chat {
      grid-template-columns: 16% auto;
    }
    .follower.conversation > div > .name {
      display: none;
    }
  }
`;

export default Wrapper;
