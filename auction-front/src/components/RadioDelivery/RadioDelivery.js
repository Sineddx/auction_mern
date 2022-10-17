import { useEffect } from "react";
import { useState } from "react";
import FormRow from "../FormRow/FormRow";
import Wrapper from "./RadioDelivery.styled";

const RadioDelivery = ({ list, deliveryOptions, changeDeliveryOptions }) => {
  const [radio, setRadio] = useState(list[0]);
  useEffect(() => {
    changeDeliveryOptions({
      ...deliveryOptions,
      pl: translateToPL(list[0]),
      id: list[0],
    });
  }, []);

  const translateToPL = (word) => {
    if (word === "parcelLocker-inpost") {
      return "Paczkomat";
    }
    if (word === "courier-inpost") {
      return "Kurier(Inpost)";
    }
    if (word === "courier-dpd") {
      return "Kurier(DPD)";
    }
    if (word === "certified-letter") {
      return "List polecony";
    }
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
    changeDeliveryOptions({
      parcelLockerNumber: "",
      pl: translateToPL(e.target.value),
      id: e.target.value,
    });
  };
  const handleChange = (e) => {
    changeDeliveryOptions({
      ...deliveryOptions,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <fieldset className="courier-pick">
        <legend>Wybierz opcję dostawy:</legend>
        {list.map((x, index) => (
          <div key={index}>
            <input
              type="radio"
              id={x}
              name="deliveryChoose"
              value={x}
              checked={radio === x}
              // checked={selected === "buyNow"}
              onChange={handleRadioChange}
            />
            <label htmlFor={x}>{translateToPL(x)}</label>
          </div>
        ))}
      </fieldset>
      {radio === "parcelLocker-inpost" && (
        <Wrapper>
          <FormRow
            type="text"
            name="parcelLockerNumber"
            labelText="Wpisz numer paczkomatu"
            value={deliveryOptions?.parcelLockerNumber}
            handleChange={handleChange}
          />
        </Wrapper>
      )}
    </>
  );
};
export default RadioDelivery;
