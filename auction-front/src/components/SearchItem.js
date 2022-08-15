import styled from "styled-components";
const SearchItem = ({
  auctionItem: { name, price, image, location, _id, auctionType },
}) => {
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

  return (
    <Wrapper>
      <div className="wrapper">
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
              <div className="city">
                <span>Miasto: {location}</span>
              </div>
            </div>
            <div>
              <div className="price">
                {auctionType !== "advertisement" ? (
                  <span>{price.toFixed(2)}ZŁ</span>
                ) : null}
                <span className="auction-type">{auctionTypePL}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 65%;
  min-height: 100%;

  .item-container {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .wrapper {
    width: 100%;
    margin-top: 0.8rem;
    box-shadow: 2px 2px 2px 2px;
    transition: 0.2s;
  }
  .wrapper:hover {
    transform: scale(1.02);
  }
  .item-image {
    min-width: 100px;
    padding-top: 0.5rem;
    width: 15%;
    padding-left: 0.5rem;
  }
  .item-image img {
    width: 90%;
    box-shadow: -1px -2px 2px 1px;
  }
  .auction-details {
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
  }
  .auction-name {
    font-size: larger;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--card-bg);
  }
  .price {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    font-size: x-large;
    font-weight: 700;
    color: var(--card-bg);
    padding-top: 1.4rem;
  }
  .auction-type {
    font-size: small;
    text-transform: uppercase;
    font-weight: bold;
    background-color: var(--card-bg);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    box-shadow: 2px 2px 2px 2px;
  }
  .price span {
    padding: 0.1rem;
  }
  @media (max-width: 600px) {
    width: 95%;
    .price {
      padding-right: 1rem;
      font-size: small;
    }
    .auction-type {
      font-size: small;
      text-align: center;
      padding: 0.1rem 0.2rem;
      font-size: 0.7rem;
    }
    .auction-name,
    .city {
      font-size: small;
    }
    .item-image {
      padding-left: 0.5rem;
    }
  }
`;
export default SearchItem;
