import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "./PaymentAccepted.styled";

const PaymentAccepted = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const ordersHistory = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <div className="content">
        {location.state}
        <div className="buttons">
          <button className="btn" onClick={backToHome}>
            Wróć na główną stronę
          </button>
          <button className="btn" onClick={ordersHistory}>
            Przejrzyj historię zamówień
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default PaymentAccepted;
