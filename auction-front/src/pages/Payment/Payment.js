import { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./Payment.styled";
const Payment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLoading, updateOrder, setLoadingOFF, setLoadingON } =
    useAppContext();
  const [error, setError] = useState({
    valid: true,
    value: "Uzupełnij pole powyżej",
  });

  const type = searchParams.get("type");

  const blikNumber = useRef();
  const creditCardNumber = useRef();

  const [select, setSelect] = useState();
  useEffect(() => {
    setSelect(type === "blik" ? blikNumber : creditCardNumber);
  }, []);

  const clickHandler = async () => {
    const orderId = searchParams.get("id");
    const answer = await updateOrder(orderId);
    setTimeout(() => {
      setLoadingOFF();
      navigate(`/payment-accepted?id=${orderId}`, { state: answer });
    }, 3000);
  };
  useEffect(() => {}, [select]);

  const onChange = (e) => {
    if (select === blikNumber) {
      if (blikNumber.current.value.length !== 6) {
        setError({ valid: true, value: "Kod blik musi składać się z 6 cyfr" });
      } else {
        setError({ valid: false, value: "" });
      }
    }
    if (select === creditCardNumber) {
      if (creditCardNumber.current.value.length !== 12) {
        setError({
          valid: true,
          value: "Numer karty kredytowej musi składać się z 12 cyfr",
        });
      } else {
        setError({ valid: false, value: "" });
      }
    }
  };

  return !isLoading ? (
    <Wrapper>
      <div className="payment-window">
        <label htmlFor={type === "blik" ? "blik" : "creditCard"}>
          {type === "blik" ? "Numer blik" : "Numer karty kredytowej"}
        </label>
        <input
          ref={type === "blik" ? blikNumber : creditCardNumber}
          type="number"
          name={type === "blik" ? "blik" : "creditCard"}
          onChange={onChange}
        ></input>
        {error.valid && <p className="error-message">{error.value}</p>}
        <button
          className={
            !error.valid ? "btn btn-payment" : "btn btn-payment disabled"
          }
          onClick={clickHandler}
          disabled={error.valid}
        >
          Dokonaj płatności
        </button>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <Loading />
    </Wrapper>
  );
};
export default Payment;
