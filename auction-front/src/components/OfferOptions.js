const OfferOptions = ({
  quantity,
  availability,
  price,
  user,
  auctionType,
  bidValue,
  increase,
  decrease,
}) => {
  if (auctionType === "buyNow") {
    return (
      <div className="offer-price">
        {price}ZŁ
        <div className="quantity-options">
          <span className="quantity-text">Liczba sztuk</span>
          <div className="quantity">
            <button className="btn minus" onClick={decrease}>
              -
            </button>
            <input type="number" name="input" value={quantity} />
            <button className="btn plus" onClick={increase}>
              +
            </button>
          </div>
          <span className="availability">Dostępnych: {availability} </span>
        </div>
        {user ? (
          <button className="btn">Kup teraz</button>
        ) : (
          <button className="btn">Zaloguj</button>
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
            <input type="number" name="input" value={bidValue} />
          </div>
        </div>
        {user ? (
          <button className="btn">Licytuj</button>
        ) : (
          <button className="btn">Zaloguj</button>
        )}
      </div>
    );
  }
};
export default OfferOptions;
