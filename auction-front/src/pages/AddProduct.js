import { useEffect, useRef, useState } from "react";
import {
  FormRow,
  Alert,
  ImagesPanel,
  FormRowSelect,
  RadioAuctionType,
  DeliveryOptions,
} from "../components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormRowFile from "../components/FormRowFile";
import { useAppContext } from "../context/appContext";
const AddProduct = () => {
  const navigate = useNavigate();
  const { showAlert, addImage, urls, addProduct, displayAlert, showToast } =
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
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
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
  useEffect(() => {
    console.log(values);
  }, [values]);
  const categories = [
    "Książki",
    "Uroda",
    "Firma i usługi",
    "Dziecko",
    "Zdrowie",
    "Sport",
    "Motoryzacja",
    "Moda",
    "Kultura i rozrywka",
    "Elektronika",
  ];
  const handleImage = async (e) => {
    try {
      await addImage(e);
    } catch (e) {}
    e.target.value = null;
  };
  const priceRef = useRef();
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
    } = values;
    if (!name || !location || !description || !auctionType || !expiringDate) {
      displayAlert();
      return;
    }
    if (auctionType !== "advertisement" && !price) {
      displayAlert();
      return;
    }
    const response = await addProduct(values);
    response.added &&
      setTimeout(() => {
        navigate("/");
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
  // useEffect(() => {
  //   const calculatePrice = (e) => {
  //     if (priceRef.current && !priceRef.current.contains(e.target)) {
  //       const price = Number(values.price).toFixed(2);
  //       setValues({ ...values, price: price });
  //       priceRef.current.value = price;
  //     } else {
  //       return;
  //     }
  //   };
  //   document.body.addEventListener("click", calculatePrice);
  //   return () => document.body.removeEventListener("click", calculatePrice);
  // }, [values.price]);
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
          list={categories}
        />

        <RadioAuctionType
          handleChange={handleChange}
          checked={values.auctionType}
        />
        {values.auctionType !== "advertisement" && (
          <FormRow
            ref={priceRef}
            type="number"
            name="price"
            cssName="price"
            valueAsNumber={values.price}
            handleChange={handleChange}
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
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Dodaj przedmiot!
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .prod-description {
    width: 900px;
  }
  .buttons {
    display: flex;
    justify-content: center;
  }
  .form {
    border-top: 5px solid var(--card-bg);
  }
  .buttons button {
    margin-left: 0.3rem;
  }
  .btn-clear {
    background-color: #e16162;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--card-bg);
  }
  p {
    text-align: center;
  }
`;
export default AddProduct;
