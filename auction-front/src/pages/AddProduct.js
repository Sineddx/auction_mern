import { useEffect, useRef, useState } from "react";
import { FormRow, Alert, ImagesPanel, FormRowSelect } from "../components";
import styled from "styled-components";
import FormRowFile from "../components/FormRowFile";
import { useAppContext } from "../context/appContext";
import { MdKeyboardArrowLeft } from "react-icons/md";
const AddProduct = () => {
  const { showAlert, addImage, urls } = useAppContext();
  const initialState = {
    name: "",
    price: 0,
    description: "",
    category: "Książki",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
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
  useEffect(() => {
    const calculatePrice = (e) => {
      if (priceRef.current && !priceRef.current.contains(e.target)) {
        const price = Number(values.price).toFixed(2);
        setValues({ ...values, price: price });
        priceRef.current.value = price;
      } else {
        return;
      }
    };
    document.body.addEventListener("click", calculatePrice);
    return () => document.body.removeEventListener("click", calculatePrice);
  }, [values.price]);
  console.log(priceRef);
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
