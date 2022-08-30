import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/pages/Checkout";
import { FormRow, FormRowSelect } from "../components";
import { useAppContext } from "../context/appContext";
const Checkout = () => {
  const { user, getUser } = useAppContext();
  const [userDetails, setUserDetails] = useState();
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
