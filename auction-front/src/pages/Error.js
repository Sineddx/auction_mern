import main from "../assets/images/404.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={main} alt="strona nie znaleziona" />
        <h3>Strona nie znaleziona!</h3>
        <p>
          Po przeszukaniu wszystkich możliwości, nie udało nam się znaleźć
          rzeczy której szukasz
        </p>
        <Link to="/">Wróć na stronę główną</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
