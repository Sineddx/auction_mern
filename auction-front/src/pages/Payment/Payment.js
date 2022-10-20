import { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./Payment.styled";
const Payment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loading, updateOrder } = useAppContext();

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
  };
  return !loading ? (
    <Wrapper>
      <div className="payment-window">
        <label htmlFor={type === "blik" ? "blik" : "creditCard"}>
          {type === "blik" ? "Numer blik" : "Numer karty kredytowej"}
        </label>
        <input
          ref={type === "blik" ? blikNumber : creditCardNumber}
          name={type === "blik" ? "blik" : "creditCard"}
        ></input>
        <button className="btn payment-btn" onClick={clickHandler}>
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
