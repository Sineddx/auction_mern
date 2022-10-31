import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  .order-container {
    flex-basis: 0 0 33%;
    width: 400px;
    height: 400px;
    box-shadow: 5px 5px 35px 3px var(--card-bg);
    cursor: pointer;
    display: flex;
    gap: 1rem;
    font-weight: 700;
    border-radius: 1rem;
  }
  .item-image {
    display: flex;
    align-items: center;
    width: 20%;
  }
  .item-image img {
    width: 100%;
  }
  .btn-add-opinion {
    height: 15%;
    margin: auto 0;
  }
`;

export default Wrapper;
