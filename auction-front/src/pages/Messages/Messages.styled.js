import styled from "styled-components";
const Wrapper = styled.section`
  .Chat {
    /* position: relative; */
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .Left-side-chat {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
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
    overflow: auto;
  }

  .Chat-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Right-side-chat {
    width: 70%;
    margin-top: 2rem;
    margin-right: 2rem;
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
  .low-resolution {
    display: none;
    text-align: center;
    font-weight: 600;
  }
  @keyframes left-side-animation-begin {
    from {
      width: 10%;
    }
    to {
      width: 50%;
    }
  }
  @keyframes left-side-animation-end {
    from {
      width: 50%;
    }
    to {
      width: 10%;
    }
  }
  @keyframes right-side-animation-begin {
    from {
      width: 80%;
    }
    to {
      width: 50%;
    }
  }
  @keyframes right-side-animation-end {
    from {
      width: 50%;
    }
    to {
      width: 80%;
    }
  }

  @media (max-width: 900px) {
    .Chat-container {
      padding: 0;
    }
    .followerImage {
      max-width: 100%;
    }
    .low-resolution {
      display: block;
    }
    .Left-side-chat {
      margin-top: 1rem;
      margin-left: 0.2rem;
      width: 10%;
      ${(props) => {
        if (props.toggle) {
          return `
          animation-name: left-side-animation-begin;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
          `;
        } else {
          return `
          animation-name: left-side-animation-end;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
          `;
        }
      }}
    }
    .Left-side-chat h2 {
      display: none;
    }
    .Right-side-chat {
      width: 90%;
      margin: 1rem 0 0 0;
      ${(props) => {
        if (props.toggle) {
          return `
          animation-name: right-side-animation-begin;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
          `;
        } else {
          return `
          animation-name: right-side-animation-end;
          animation-duration: 0.3s;
          animation-direction: forwards;
          `;
        }
      }}
    }
  }
`;

export default Wrapper;
