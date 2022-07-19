import styled from "styled-components";
import img from "../assets/images/shopping-main.svg";
const Home = () => {
  return (
    <Wrapper>
      <div className="center-page">
        <div className="description">
          <div>
            <p>
              Super <span className="serwis">Serwis</span>
            </p>
          </div>
          <div>
            <p>Najlepszy serwis aukcyjny i nie tylko!</p>
          </div>
        </div>
        <img src={img} className="main-photo" alt="zdjecie zachecajace" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap; */

  .center-page {
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .serwis {
    color: gold;
  }
  .main-photo {
    max-width: 700px;
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    text-align: center;
    color: var(--textColor);
    font-weight: 600;
    font-size: xx-large;
  }
  @media (max-width: 700px) {
    .center-page {
      margin-top: 1rem;
    }
    .description {
      font-size: 1.9rem;
      margin-bottom: 2rem;
    }
    .main-photo {
      max-width: 450px;
    }
  }
  @media (max-width: 500px) {
    align-items: center;
    .main-photo {
      max-width: 300px;
    }
    .description {
      font-size: 1.2rem;
    }
  }
`;

export default Home;
