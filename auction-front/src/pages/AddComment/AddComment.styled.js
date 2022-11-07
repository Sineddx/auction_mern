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
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  }
  .add-comment-rating{
    
  }
  .btn-add-comment{
    width: 50%;
    margin: 1rem auto 0 auto;
  }
`

export default Wrapper