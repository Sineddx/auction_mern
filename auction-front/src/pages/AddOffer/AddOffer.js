import Wrapper from "./AddOffer.styled";
import {
  FormRow,
  Alert,
  ImagesPanel,
  FormRowSelect,
  RadioAuctionType,
  DeliveryOptions,
  FormRowFile,
} from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { categoriesList, statesList } from "../../utils/arrays";
const AddOffer = () => {
  const navigate = useNavigate();
  const { showAlert, addImage, urls, addOffer, displayAlert, showToast } =
    useAppContext();
  const initialState = {
    name: "",
    price: 0,
    description: "",
    category: "Książki",
    auctionType: "buyNow",
    quantity: 1,
    location: "",
    deliveryOptions: [],
    expiringDate: "",
    state: "Wszystkie",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (e) => {
    const fixPrice = Number(e.target.value).toFixed(2);
    setValues({ ...values, [e.target.name]: fixPrice });
  };

  const handleDeliveryOptionsChange = (e) => {
    const alreadyExist = [...values.deliveryOptions].find((option) => {
      return option === e.target.value;
    });
    if (alreadyExist) {
      const newValues = [...values.deliveryOptions].filter((option) => {
        return option !== alreadyExist;
      });
      setValues({ ...values, deliveryOptions: [...newValues] });
    } else {
      setValues({
        ...values,
        deliveryOptions: [...values.deliveryOptions, e.target.value],
      });
    }
  };

  const handleImage = async (e) => {
    try {
      await addImage(e);
    } catch (e) {}
    e.target.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      price,
      location,
      description,
      auctionType,
      quantity,
      deliveryOptions,
      expiringDate,
      state,
    } = values;
    if (
      !name ||
      !location ||
      !description ||
      !auctionType ||
      !expiringDate ||
      state === "Wszystkie"
    ) {
      window.scrollTo(0, 0);
      displayAlert();
      return;
    }
    if (auctionType !== "advertisement" && !price) {
      window.scrollTo(0, 0);
      displayAlert();
      return;
    }
    const response = await addOffer(values);
    response.added &&
      setTimeout(() => {
        navigate(`/offer?name=${response.name}&code=${response.code}`);
      }, 1000);

    if (!response.added) {
      if (response.msg === "Authentication Invalid") {
        showToast("Użytkownik niezalogowany", "warning");
        navigate("/signin?login=true");
      } else {
        displayAlert(response.msg);
      }
    }
  };


  return (
    <Wrapper>
      <form className="form">
        {showAlert && <Alert />}
        {urls.length === 0 && (
          <FormRowFile
            type="file"
            name="image"
            handleChange={handleImage}
            labelText="Zdjęcia"
            required={true}
            className="firstupload"
          />
        )}
        {urls.length > 0 && (
          <ImagesPanel urls={values.urls} handleImage={handleImage} />
        )}
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
          labelText="Nazwa przedmiotu"
          required={true}
        />
        <FormRow
          type="textarea"
          name="description"
          value={values.description}
          handleChange={handleChange}
          labelText="Opis przedmiotu"
          required={true}
          textarea={true}
        />
        <FormRowSelect
          name="category"
          value={values.category}
          handleChange={handleChange}
          labelText="Kategoria"
          list={categoriesList}
        />

        <RadioAuctionType
          handleChange={handleChange}
          checked={values.auctionType}
        />
        {values.auctionType !== "advertisement" && (
          <FormRow
            type="number"
            name="price"
            cssName="price"
            valueAsNumber={values.price}
            handleChange={handlePriceChange}
            labelText="Cena przedmiotu(PLN)"
            required={true}
          />
        )}

        {values.auctionType === "buyNow" && (
          <FormRow
            type="number"
            name="quantity"
            value={values.quantity}
            handleChange={handleChange}
            labelText={"ilość sztuk produktu"}
          />
        )}
        <FormRowSelect
          labelText="Województwa"
          name="state"
          value={values.state}
          handleChange={handleChange}
          list={["Wszystkie", ...statesList]}
        />
        <FormRow
          type="text"
          name="location"
          value={values.location}
          handleChange={handleChange}
          labelText="Lokalizacja przedmiotu(Miasto)"
          required={true}
        />
        {values.auctionType !== "advertisement" && (
          <DeliveryOptions handleChange={handleDeliveryOptionsChange} />
        )}
        <FormRow
          type="datetime-local"
          name="expiringDate"
          value={values.expiredAt}
          handleChange={handleChange}
          labelText="Data zakończenia"
          required={true}
          min={new Date().toISOString().slice(0,-8)}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Dodaj przedmiot!
        </button>
      </form>
    </Wrapper>
  );
};
export default AddOffer;
