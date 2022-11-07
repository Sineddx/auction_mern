import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    
  .add-comment-container{
    margin: 2rem auto;
    width: 45%;
    border: 0.5px solid var(--card-bg);
    box-shadow: 5px 5px 10px 2px var(--card-bg);
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 1rem 1rem;
    //justify-content: center;
    //align-items: center;
    border-radius: 30px;
  }
  .add-comment-container p{
    text-align: end;
  }
  .half{
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0 1rem 0;
  }
  .half textarea{
    width: 50%;
  }
  .add-comment-rating{
    
  }
  .btn-add-comment{
    width: 80%;
    height: 2.5rem;
    margin: 1rem auto 0 auto;
    border-radius: 30px;
  }
  @media(max-width: 1100px){
    .half{
      flex-direction: column;
      text-align: center;
    }
    .add-comment-container{
      width: 70%;
    }
    .add-comment-container p{
      text-align: center;

    }
    .half textarea{
      width: 100%;
      height: 100px;
    }
    .add-comment-ratin{
    }
    .btn-add-comment{
      width: 80%;
      height: 3rem;
    }
  }
`

export default Wrapper