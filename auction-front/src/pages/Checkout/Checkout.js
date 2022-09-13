import { useEffect, useState } from "react";
import Wrapper from "./Checkout.styled";
import { FormRow, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import blik from "../../assets/images/blik.png";
import card from "../../assets/images/karta.jpg";
const Checkout = () => {
  const { user, getUser } = useAppContext();
  const [userDetails, setUserDetails] = useState();
  const [payment, setPayment] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUserDetails(data);
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const clickHandler = () => {
    console.log(userDetails);
  };

  const changePayment = (e) => {
    const blik = document.getElementById("blik");
    const creditCard = document.getElementById("karta kredytowa");
    if (e.target.id === "blik") {
      blik.classList.add("clicked");
      creditCard.classList.remove("clicked");
    }
    if (e.target.id === "karta kredytowa") {
      creditCard.classList.add("clicked");
      blik.classList.remove("clicked");
    }
    setPayment(e.target.id);
    console.log(payment);
  };
  return (
    <Wrapper>
      <div className="address">
        <h2 className="title">Adres</h2>
        <hr className="underline"></hr>

        <div className="details">
          <div className="Imie">
            <FormRow type="text" name="name" labelText="Imię" required={true} />
          </div>
          <div className="Nazwisko">
            <FormRow
              type="text"
              name="surname"
              labelText="Nazwisko"
              required={true}
            />
          </div>
          <div className="Adres">
            <FormRow
              type="text"
              name="address1"
              labelText="Adres(Ulica)"
              required={true}
            />
          </div>
          <div className="Adres2">
            <FormRow
              type="text"
              name="address2"
              labelText="Adres2(nr domu/mieszkania)"
              required={true}
            />
          </div>
          <div className="Województwo">
            <FormRow
              type="text"
              name="address2"
              labelText="Województwo"
              required={true}
            />
          </div>
          <div className="Miasto">
            <FormRow
              type="text"
              name="address2"
              labelText="Miasto"
              required={true}
            />
          </div>
          <div className="Kod-Pocztowy">
            <FormRow
              type="text"
              name="address2"
              labelText="Kod Pocztowy"
              required={true}
            />
          </div>
          <div className="Numer-Tel">
            <FormRow
              type="Number"
              name="address2"
              labelText="Numer telefonu"
              required={true}
            />
          </div>
          <button className="btn save-address" onClick={clickHandler}>
            Zapisz adres
          </button>
        </div>
      </div>
      <div className="ship-payment-details">
        <div className="shipping">
          <h2 className="title">Dostawa</h2>
          <hr className="underline"></hr>
        </div>
        <div className="payment">
          <h2 className="title">Płatność</h2>
          <hr className="underline"></hr>
          <div className="payment-methods">
            <div className="one-method">
              <img onClick={changePayment} id="blik" src={blik}></img>
            </div>
            <div className="one-method">
              <img
                onClick={changePayment}
                id="karta kredytowa"
                src={card}
              ></img>
            </div>
          </div>
          <p className="payment-picked">
            Twój wybór: <hr></hr> {payment}
          </p>
        </div>
      </div>
      <div className="order-summary">
        <h2 className="title">Podsumowanie</h2>
        <hr className="underline"></hr>
      </div>
    </Wrapper>
  );
};

export default Checkout;
