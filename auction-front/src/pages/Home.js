import Wrapper from "../assets/wrappers/pages/Home";
import img from "../assets/images/shopping-fix.svg";
import { categories } from "../utils/categories-images";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path);
  }
  return (
    <Wrapper>
      <div className="center-page">
        {/* <div className="description">
          <div>
            <p>
              Super <span className="serwis">Serwis</span>
            </p>
          </div>
          <div>
            <p>Najlepszy serwis aukcyjny i nie tylko!</p>
          </div>
        </div> */}
        <div className="half">
          <div className="categories">
            {categories.map((category, index) => {
              const { path, name, icon } = category;
              return (
                <div key={index} className="single-category" onClick={() => handleClick(path)}>
                  <div className="for-image">
                    <img src={icon} alt="" />
                  </div>

                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="half big-image">
          <img src={img} className="main-photo" alt="zdjecie zachecajace" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
