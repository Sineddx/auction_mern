import Wrapper from "../assets/wrappers/pages/Home";
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
export default Home;
