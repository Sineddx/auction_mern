import styled from "styled-components";

const DeliveryOptions = ({ handleChange }) => {
  return (
    <Wrapper>
      <fieldset>
        <legend>Wybierz możliwe opcje dostawy</legend>
        <div className="single-option">
          <div>
            <input
              className="option-name"
              type="checkbox"
              name="deliveryOptions"
              value="parcelLocker-inpost"
              onChange={handleChange}
            />{" "}
            Paczkomat(Inpost)
          </div>
          8,99ZŁ
        </div>
        <div className="single-option">
          <div>
            <input
              className="option-name"
              type="checkbox"
              name="deliveryOptions"
              value="courier-inpost"
              onChange={handleChange}
            />{" "}
            Kurier(Inpost)
          </div>
          10,99ZŁ
        </div>
        <div className="single-option">
          <div>
            <input
              className="option-name"
              type="checkbox"
              name="deliveryOptions"
              value="courier-dpd"
              onChange={handleChange}
            />{" "}
            Kurier(DPD)
          </div>
          11,99ZŁ
        </div>
        <div className="single-option">
          <div>
            <input
              className="option-name"
              type="checkbox"
              name="deliveryOptions"
              value="certified-letter"
              onChange={handleChange}
            />{" "}
            List polecony
          </div>
          10,50ZŁ
        </div>
        <div className="single-option">
          <div>
            <input
              className="option-name"
              type="checkbox"
              name="deliveryOptions"
              value="person-pickup"
              onChange={handleChange}
            />{" "}
            Odbiór osobisty
          </div>
          0,00ZŁ
        </div>
      </fieldset>
    </Wrapper>
  );
};
export default DeliveryOptions;

const Wrapper = styled.div`
  .single-option {
    display: flex;
    justify-content: space-between;
  }
`;
