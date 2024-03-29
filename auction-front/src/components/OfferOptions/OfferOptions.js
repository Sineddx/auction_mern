import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useAppContext} from "../../context/appContext";

const OfferOptions = ({ availability, price, user, auctionType, auction, offerId, setRefresh, refresh }) => {
  const [bidValue, setBidValue] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const {raiseTheBidPrice} = useAppContext()

  const increaseAmount = () => {
    if (quantity === availability) {
      return;
    }
    if (quantity < availability) {
      setQuantity(Number(quantity) + 1);
      return;
    }
  };

  const decreaseAmount = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    setBidValue(e.target.value);
  };
  const handleQuantityChange = (e) => {
    const { value } = e.target;
    if (value > availability) {
      setQuantity(availability);
      return;
    }
    if (value < availability) {
      setQuantity(value);
    }
    if (value < 0) {
      setQuantity(1);
    }
  };
  const handleLogin = () => {
    navigate("/signin?login=true", {
      state: { lastPath: location.pathname + location.search },
    });
  };

  const navigateToCheckout = () => {
    navigate(`/checkout?auction=${auction._id}&quantity=${quantity}`);
  };

  const handleBid = async () => {
    await raiseTheBidPrice(offerId, bidValue)
    setRefresh(!refresh)
  }
  if (auctionType === "buyNow") {
    return (
      <div className="offer-price">
        {price}ZŁ
        <div className="quantity-options">
          <span className="quantity-text">Liczba sztuk</span>
          <div className="quantity">
            <button className="btn minus" onClick={decreaseAmount}>
              -
            </button>
            <input
              type="number"
              name="input"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button className="btn plus" onClick={increaseAmount}>
              +
            </button>
          </div>
          <span className="availability">Dostępnych: {availability} </span>
        </div>
        {user ? (
          <button className="btn" onClick={navigateToCheckout}>
            Kup teraz
          </button>
        ) : (
          <button className="btn" onClick={handleLogin}>
            Zaloguj
          </button>
        )}
      </div>
    );
  }
  if (auctionType === "bid") {
    return (
      <div className="offer-price">
        {price} ZŁ
        <div className="bid-options">
          <div className="bid-value">
            <input
              type="number"
              name="input"
              value={bidValue}
              onChange={handleChange}
            />
          </div>
        </div>
        {user ? (
          <button className="btn" onClick={handleBid}>Licytuj</button>
        ) : (
          <button className="btn" onClick={handleLogin}>
            Zaloguj
          </button>
        )}
      </div>
    );
  }
};
export default OfferOptions;
