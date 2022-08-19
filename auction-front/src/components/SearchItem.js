import Wrapper from "../assets/wrappers/components/SearchItem";
import { useNavigate } from "react-router-dom";
const SearchItem = ({
  auctionItem: { name, price, image, location, _id, auctionType },
}) => {
  const navigate = useNavigate();
  let auctionTypePL;
  if (auctionType === "advertisement") {
    auctionTypePL = "Ogłoszenie";
  }
  if (auctionType === "bid") {
    auctionTypePL = "Licytacja";
  }
  if (auctionType === "buyNow") {
    auctionTypePL = "Kup teraz";
  }
  const handleClick = () => {
    navigate(`/offer?name=${name}&code=${_id}`);
  };

  return (
    <Wrapper auctionType={auctionTypePL}>
      <div className="wrapper" onClick={handleClick}>
        <div className="item-container">
          <div className="item-image">
            <img
              src={
                image[0]
                  ? image[0].url
                  : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              }
              alt=""
            />
          </div>
          <div className="auction-details">
            <div>
              <div className="auction-name">
                <p>{name}</p>
              </div>
              <div className="price-container">
                {auctionType !== "advertisement" ? (
                  <span className="price">{price.toFixed(2)} ZŁ</span>
                ) : null}{" "}
                <span className="auction-type">{auctionTypePL}</span>
              </div>
              <div className="city">
                <span>Miasto: {location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchItem;
