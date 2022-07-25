import { useEffect, useState, useCallback } from "react";
import { FormRow, Alert, ImagesPanel } from "../components";
import styled from "styled-components";
import FormRowFile from "../components/FormRowFile";
import { useAppContext } from "../context/appContext";
import Images from "../components/Images";
const AddProduct = () => {
  const { showAlert, addImage } = useAppContext();
  const initialState = {
    name: "kek",
    urls: [],
    price: 0,
    desc: "",
    currentUrl: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleImage = async (e) => {
    let data;
    try {
      data = await addImage(e);
      console.log(data);
    } catch (e) {}
    setValues({
      ...values,
      urls: [...values.urls, ...data],
      currentUrl: data[0],
    });
    console.log(values.urls);
    e.target.value = null;
  };
  console.log(values);
  return (
    <Wrapper>
      <form className="form">
        {showAlert && <Alert />}
        {values.urls.length === 0 && (
          <FormRowFile
            type="file"
            name="image"
            handleChange={handleImage}
            labelText="Zdjęcia"
            required={true}
            className="firstupload"
          />
        )}

        {values.urls.length > 0 && (
          <ImagesPanel
            urls={values.urls}
            handleImage={handleImage}
            currentUrl={values.currentUrl}
          />
        )}
        {/* {values.urls.length > 0 && <Images urls={values.urls} />} */}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
