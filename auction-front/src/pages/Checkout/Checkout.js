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

  const initialState = {
    name: "",
    lastName: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    postalCode: "",
    phone: "",
  };
  const [address, setAddress] = useState(initialState);
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUserDetails(data);
      const {
        name,
        lastName,
        address1,
        address2,
        state,
        city,
        postalCode,
        phone,
      } = data.addresses[0];
      setAddress({
        name,
        lastName,
        address1,
        address2,
        state,
        city,
        postalCode,
        phone,
      });
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const clickHandler = () => {
    console.log(userDetails);
  };

  const handleAddressDetailsChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
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
  const categoriesList = ["Książki"];
  return (
    <Wrapper>
      <div className="address">
        <h2 className="title">Adres</h2>
        <hr className="underline"></hr>
        <p className="my-addresses-title">Moje adresy</p>
        <div className="addresses-list">
          {/* Wróc tutaj  */}
          <FormRowSelect
            list={userDetails ? userDetails.addresses[0] : categoriesList}
          />
        </div>
        <div className="details">
          <div className="Imie">
            <FormRow
              type="text"
              name="name"
              labelText="Imię"
              required={true}
              value={address.name}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Nazwisko">
            <FormRow
              type="text"
              name="lastName"
              labelText="Nazwisko"
              required={true}
              value={address.lastName}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Adres">
            <FormRow
              type="text"
              name="address1"
              labelText="Adres(Ulica)"
              required={true}
              value={address.address1}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Adres2">
            <FormRow
              type="text"
              name="address2"
              labelText="Adres2(nr domu/mieszkania)"
              required={true}
              value={address.address2}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Województwo">
            <FormRow
              type="text"
              name="state"
              labelText="Województwo"
              required={true}
              value={address.state}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Miasto">
            <FormRow
              type="text"
              name="city"
              labelText="Miasto"
              required={true}
              value={address.city}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Kod-Pocztowy">
            <FormRow
              type="text"
              name="postalCode"
              labelText="Kod Pocztowy"
              required={true}
              value={address.postalCode}
              handleChange={handleAddressDetailsChange}
            />
          </div>
          <div className="Numer-Tel">
            <FormRow
              type="Number"
              name="phone"
              labelText="Numer telefonu"
              required={true}
              value={address.phone}
              handleChange={handleAddressDetailsChange}
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
          <p className="payment-picked">{payment}</p>
        </div>
      </div>
      <div className="order-summary">
        <h2 className="title">Podsumowanie</h2>
        <hr className="underline"></hr>
        <div className="auction-details">
          <div className="auction-image">
            <img src={blik}></img>
          </div>
          <div className="auction-desc">
            <p>Nazwa: </p>
            <p>Ilość Sztuk: </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
