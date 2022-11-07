import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  .order-container{
    border: 0.5px solid var(--card-bg);
    border-radius: 30px;
    padding: 0 1rem 1rem 1rem;
    flex: 0 0 30%;
    display: flex;
    justify-content: space-between;
    box-shadow: 5px 5px 10px 2px var(--card-bg);
  }
  .order-container:hover{
    transform: scale(1.01);
    transition: transform 0.2s;
  }
  .order-details{
    width: 50%;
    padding: 3rem 0 2rem 0;
  }
  .order-details p{
    margin: 0;
  }
  .order-details span{
    font-weight: 700;
  }
  .item-image{
    margin: 1rem 2rem 0 0;
    max-width: 30%;
    max-height: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .item-image img{
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
  .order-opinion{
    margin: 0 auto;
    font-weight: 800;
    text-align: center;
  }
  .btn-add-opinion{
    text-align: center;
  }
  @media (max-width: 1250px){
    font-size: 14px;
    .order-container{
      flex: 0 0 45%;
    }
  }
  @media (max-width: 880px){
    .order-container{
      flex: 0 0 80%;
    }
    .item-image {
      
      margin: 3rem 0 0 0;
      max-height: 60%;
    }
  }
`;

export default Wrapper;
