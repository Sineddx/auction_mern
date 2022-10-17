import { useEffect, useState } from "react";
import Wrapper from "./Checkout.styled";
import {
  DeliveryOptions,
  FormRow,
  FormRowSelect,
  Loading,
  RadioDelivery,
} from "../../components";
import { useAppContext } from "../../context/appContext";
import blik from "../../assets/images/blik.png";
import card from "../../assets/images/karta.jpg";
import { useSearchParams } from "react-router-dom";

const Checkout = () => {
  const { user, getUser, getSingleOffer, saveUserAddress, editUserAddress } =
    useAppContext();

  const [userDetails, setUserDetails] = useState();
  const [auctionDetails, setAuctionDetails] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [payment, setPayment] = useState();
  const [select, setSelect] = useState();
  const [selectValue, setSelectValue] = useState("");

  const initialState = {
    name: "",
    lastName: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    postalCode: "",
    phone: "",
    _id: "",
  };

  const [deliveryOptions, setDeliveryOptions] = useState({
    id: "",
    pl: "",
    parcelLockerNumber: "",
  });

  const [address, setAddress] = useState(initialState);
  useEffect(() => {
    const getAndUpdateAddressFields = async () => {
      const data = await getUser();
      setUserDetails(data);
      if (data.addresses[0]) {
        setSelect(true);
        updateAddressFields(data.addresses[0]);
      }
    };

    const getAuctionDetails = async (id) => {
      const data = await getSingleOffer(id);
      setAuctionDetails(data);
    };
    const auction_id = searchParams.get("auction");
    getAndUpdateAddressFields();
    getAuctionDetails(auction_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveNewAddress = async () => {
    const data = await saveUserAddress(address);
    setSelectValue("");
    setUserDetails({ ...userDetails, addresses: data });
  };
  const clearCurrentAddress = () => {
    setAddress(initialState);
  };

  const saveChangesInCurrentAddress = async () => {
    const data = await editUserAddress(address);
    setUserDetails({ ...userDetails, addresses: data });
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
  };

  const listOfAddresses = (addresses) => {
    const result = addresses.map((x) => {
      return x.address1 + " " + x.address2;
    });
    return result;
  };

  const updateAddressFields = (object) => {
    const {
      name,
      lastName,
      address1,
      address2,
      state,
      city,
      postalCode,
      phone,
      _id,
    } = object;

    setAddress({
      name,
      lastName,
      address1,
      address2,
      state,
      city,
      postalCode,
      phone,
      _id,
    });
  };

  const handleAddressChange = (e) => {
    setSelectValue(e.target.value);
    const selectedAddress = userDetails.addresses.find(
      (x) => x.address1 + " " + x.address2 === e.target.value
    );
    updateAddressFields(selectedAddress);
  };
  return (
    <Wrapper>
      <div className="address">
        <h2 className="title">Adres</h2>
        <hr className="underline"></hr>

        <div className="addresses-list">
          {/* Wróc tutaj  */}
          {select && (
            <FormRowSelect
              value={selectValue}
              list={listOfAddresses(userDetails.addresses)}
              handleChange={handleAddressChange}
            />
          )}
        </div>
        {!address ? (
          <Loading />
        ) : (
          <div className="details">
            <div className="Imie">
              <FormRow
                type="text"
                name="name"
                labelText="Imię"
                required={true}
                value={address ? address.name : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Nazwisko">
              <FormRow
                type="text"
                name="lastName"
                labelText="Nazwisko"
                required={true}
                value={address ? address.lastName : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Adres">
              <FormRow
                type="text"
                name="address1"
                labelText="Adres(Ulica)"
                required={true}
                value={address ? address.address1 : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Adres2">
              <FormRow
                type="text"
                name="address2"
                labelText="Adres2(nr domu/mieszkania)"
                required={true}
                value={address ? address.address2 : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Województwo">
              <FormRow
                type="text"
                name="state"
                labelText="Województwo"
                required={true}
                value={address ? address.state : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Miasto">
              <FormRow
                type="text"
                name="city"
                labelText="Miasto"
                required={true}
                value={address ? address.city : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Kod-Pocztowy">
              <FormRow
                type="text"
                name="postalCode"
                labelText="Kod Pocztowy"
                required={true}
                value={address ? address.postalCode : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="Numer-Tel">
              <FormRow
                type="Number"
                name="phone"
                labelText="Numer telefonu"
                required={true}
                value={address ? address.phone : ""}
                handleChange={handleAddressDetailsChange}
              />
            </div>

            <div className="buttons-container">
              <button className="btn save-address" onClick={saveNewAddress}>
                Dodaj nowy
              </button>
              <button
                className="btn save-address"
                onClick={clearCurrentAddress}
              >
                Wyczyść pola
              </button>
              <button
                className="btn save-address"
                onClick={saveChangesInCurrentAddress}
              >
                Zapisz zmiany
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="ship-payment-details">
        <div className="shipping">
          <h2 className="title">Dostawa</h2>
          <hr className="underline"></hr>
          {auctionDetails && (
            <RadioDelivery
              list={auctionDetails.deliveryOptions}
              deliveryOptions={deliveryOptions}
              changeDeliveryOptions={setDeliveryOptions}
            />
          )}
          {/* <InpostGeowidget
            token="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkVzROZW9TeXk0OHpCOHg4emdZX2t5dFNiWHY3blZ0eFVGVFpzWV9TUFA4In0.eyJleHAiOjE5ODEwMDg2NjUsImlhdCI6MTY2NTY0ODY2NSwianRpIjoiYTYzYTk0Y2EtZDMxNC00ZGU2LTk1YWQtNTBmYmM3Y2QyZGJjIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWxvZ2luLmlucG9zdC5wbC9hdXRoL3JlYWxtcy9leHRlcm5hbCIsInN1YiI6ImY6N2ZiZjQxYmEtYTEzZC00MGQzLTk1ZjYtOThhMmIxYmFlNjdiOi1nYlg4NERsUWFxdWtaUTBhanJsTHVjOTl3ck9OVXpRTl9YS2tuQlBiZTgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzaGlweCIsInNlc3Npb25fc3RhdGUiOiIxM2RiOWI4Mi1mYTQwLTQwZGYtOWNiOC1kZGMyNjMyMTVlZTAiLCJzY29wZSI6Im9wZW5pZCBhcGk6YXBpcG9pbnRzIiwic2lkIjoiMTNkYjliODItZmE0MC00MGRmLTljYjgtZGRjMjYzMjE1ZWUwIiwiYWxsb3dlZF9yZWZlcnJlcnMiOiIxMjcuMC4wLjEiLCJ1dWlkIjoiNDhlZTlkNDUtNTgwMS00OWVkLWE0MDQtODBiY2QxMWM5MWU0In0.VE0yFv_wY0w7ylijpbDGcSotOEeMB0KbWjeln5cHF18pnqYQn948nEC5Uk-PjSRL4ZjSKml4AUt_8MOYdu2hfdgnEVHq0zs7iP2cMWyGRzkcusGrIL5fr5tJFKrYtxjuY8F2Wkye9QSn1uX622zQK2RPZNU_isGncvmQ3EbRVg17taiIG4CSjCDKMsHX41WCDIdJWO5QZOMWyYEUDmAboWZjRz9fyXwlvHu0wpFekqgw8UpWfediy2hTp4qeVcN6s2ZRgH7uldCgFVo-6bgyPBdDeYPSXb17N3auYIoXCI9pm0TKifThqFcHZXuw1Nk5aaY70Cpe7PICY6EFOES_Rg.eyJleHAiOjE5ODEwMDg0NTQsImlhdCI6MTY2NTY0ODQ1NCwianRpIjoiODlmNjU3OTktMWZhZS00NjNhLWFhYjYtYmZmNDJiMjAzNDlmIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWxvZ2luLmlucG9zdC5wbC9hdXRoL3JlYWxtcy9leHRlcm5hbCIsInN1YiI6ImY6N2ZiZjQxYmEtYTEzZC00MGQzLTk1ZjYtOThhMmIxYmFlNjdiOi1nYlg4NERsUWFxdWtaUTBhanJsTHVjOTl3ck9OVXpRTl9YS2tuQlBiZTgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzaGlweCIsInNlc3Npb25fc3RhdGUiOiJhZTFlYjk1MC00ZGFlLTQ1ZGEtOWU1MS00MzViMjY1ZjIxNjgiLCJzY29wZSI6Im9wZW5pZCBhcGk6YXBpcG9pbnRzIiwic2lkIjoiYWUxZWI5NTAtNGRhZS00NWRhLTllNTEtNDM1YjI2NWYyMTY4IiwiYWxsb3dlZF9yZWZlcnJlcnMiOiIxNzYuMTE1Ljg2LjY1IiwidXVpZCI6IjQ4ZWU5ZDQ1LTU4MDEtNDllZC1hNDA0LTgwYmNkMTFjOTFlNCJ9.FkcMJGMiN0Kc7YiOqlByij4gfE3c23afC_j5aFPZJ96RFwWJhJhLveK3IrCohcOthb3aB_vNF61ujHPJsHknOhyQ7hhOfE97Ujd6Es4QGqH2ZJiH6u3Cobk92IgYmXw8BCuVEJER1f0dKUE5yRsxr5ztVydkSaDhjgTxm35LTX3V5KEh3_7yb8PWRDVBSF8xBMKXozBKs-rKMOehBLOzkYD6RAeo53CFC0yL9237ttlMyyi6XAxG6mPX9sS0S3LsqArXwzVKRnFBl8NPELRteWHQWp9KWEh3uul9Yjd0n-Dg5cQgyIFHsCkPCgm9g0dz4K1B0CurHtQqvZU7Pt6vSg"
            onpoint={console.log("o")}
          /> */}
        </div>
        <div className="payment">
          <h2 className="title">Płatność</h2>
          <hr className="underline"></hr>
          <div className="payment-methods">
            <div className="one-method">
              <img
                onClick={changePayment}
                id="blik"
                src={blik}
                alt="blik"
              ></img>
            </div>
            <div className="one-method">
              <img
                onClick={changePayment}
                id="karta kredytowa"
                src={card}
                alt="karta kredytowa"
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
            <img src={auctionDetails?.image[0].original}></img>
          </div>
          <div className="auction-desc">
            <div className="row">
              Nazwa: <div>{auctionDetails?.name}</div>{" "}
            </div>
            <div className="row">
              Ilość Sztuk: <div>{searchParams.get("quantity")}</div>
            </div>
            <div className="row">
              Dostawa: <div>{deliveryOptions.pl}</div>
            </div>
            {deliveryOptions.parcelLockerNumber &&
              deliveryOptions.pl === "Paczkomat" && (
                <div className="row">
                  Paczkomat nr: <div>{deliveryOptions.parcelLockerNumber}</div>
                </div>
              )}
            <div className="row">
              Płatność: <div>{payment}</div>
            </div>
            <div className="row">
              Cena:{" "}
              <div>
                {auctionDetails?.price * searchParams.get("quantity")} zł
              </div>
            </div>
          </div>
        <button className="btn btn-payment">Przejdź do płatności</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
