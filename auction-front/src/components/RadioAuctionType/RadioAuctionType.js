import { useState } from "react";
const RadioAuctionType = ({ handleChange }) => {
  const [selected, setSelected] = useState("buyNow");

  const handleRadioChange = (e) => {
    setSelected(e.target.value);
    handleChange(e);
  };
  return (
    <>
      <fieldset>
        <legend>Wybierz odpowiedni typ ogłoszenia:</legend>
        <div>
          <input
            type="radio"
            id="buyNow"
            name="auctionType"
            value="buyNow"
            checked={selected === "buyNow"}
            onChange={handleRadioChange}
          />
          <label htmlFor="buyNow">Możliwość kupienia od razu</label>
        </div>

        <div>
          <input
            type="radio"
            id="bid"
            name="auctionType"
            value="bid"
            checked={selected === "bid"}
            onChange={handleRadioChange}
          />
          <label htmlFor="bid">Licytacja</label>
        </div>

        <div>
          <input
            type="radio"
            id="advertisement"
            name="auctionType"
            value="advertisement"
            checked={selected === "advertisement"}
            onChange={handleRadioChange}
          />
          <label htmlFor="advertisement">Ogłoszenie</label>
        </div>
      </fieldset>
    </>
  );
};
export default RadioAuctionType;
