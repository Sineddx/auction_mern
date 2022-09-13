import styled from "styled-components";
const Wrapper = styled.div`
  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--backgroundColor);
    border-radius: 50%;
    border-top-color: var(--card-bg);
    padding: 8rem;
  }
  .add-new-row {
    display: none;
  }
  .big-photo-container {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.15);
  }
  .big-image {
    max-height: 300px;
  }
  .small-image {
    width: 60px;
    height: 60px;
  }
  .add-new {
    border: 1px solid var(--card-bg);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .thumbs {
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
    gap: 10px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  .small-image-settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: var(--card-bg);
    font-size: small;
    gap: 5px;
    cursor: pointer;
  }
  .delete {
    cursor: pointer;
    font-weight: 700;
  }
  .active {
    border: 3px solid var(--card-bg);
  }
  .add-new-image {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    align-content: center;
  }
  .plus-button {
    background-color: var(--card-bg);
    border: 1px solid black;
    border-radius: 50%;
    color: #fff;
    padding-left: 7px;
    padding-right: 7px;
  }
`;
export default Wrapper;
