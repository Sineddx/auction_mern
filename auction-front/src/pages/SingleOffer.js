import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useSearchParams } from "react-router-dom";
import { FormRow, Loading, OfferOptions } from "../components";

const SingleOffer = () => {
  const {
    getSingleOffer,
    singleOffer: offer,
    isLoading,
    user,
  } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [bidValue, setBidValue] = useState();
  const [oneOffer, setOneOffer] = useState();
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const increaseAmount = () => {
    if (quantity === oneOffer.quantity) {
      return;
    }
    if (quantity < oneOffer.quantity) {
      setQuantity(quantity + 1);
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

  useEffect(() => {
    const id = searchParams.get("code");
    const loadOffer = async () => {
      const data = await getSingleOffer(id);
      setOneOffer({ ...data });
    };
    loadOffer();
    console.log(oneOffer);
    setBidValue(offer.price);
  }, []);
  {
    return isLoading && !offer ? (
      <Loading />
    ) : (
      <Wrapper>
        <div className="item-container">
          <div className="gallery">
            <ImageGallery items={oneOffer ? oneOffer.image : images} />
          </div>
          <div className="item-info">
            <div className="seller">
              <div className="seller-name-container">
                <div className="seller-avatar">
                  <img
                    src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?k=20&m=1337144146&s=612x612&w=0&h=Mz4oPre6r3fccgvm5lyd22S5VFqTnrEYRJj9clL3Q1o="
                    alt="avatar sprzedawcy"
                  />
                </div>
                <span>seller name</span>
              </div>
              <button className="btn call-seller">Napisz do sprzedawcy</button>
            </div>
            <div className="offer-name">{offer.name}</div>
            <div className="item-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            {offer.auctionType === "buyNow" && (
              <OfferOptions
                auctionType="buyNow"
                quantity={quantity}
                price={offer.price}
                user={user}
                availability={offer.quantity}
                increase={increaseAmount}
                decrease={decreaseAmount}
              />
            )}
            {offer.auctionType === "bid" && (
              <OfferOptions
                auctionType="bid"
                price={offer.price}
                user={user}
                bidValue={bidValue}
              />
            )}
          </div>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  .item-container {
    display: flex;
    justify-content: center;
    width: 70%;
    background-color: var(--main-bg);
    height: 70%;
    gap: 20px;
  }
  .gallery {
    flex: 1;

    min-width: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-info {
    flex: 1;
    background-color: #fff;
  }
  .seller {
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .seller-name-container {
    padding-top: 0.2rem;
    display: flex;
    align-items: center;
    width: 50%;
    cursor: pointer;
    transition: all 0.1s;
  }
  .seller-name-container:hover {
    transform: scale(1.02);
  }
  .seller-avatar {
    width: 30%;
  }
  .seller-avatar img {
    width: 100%;
  }
  .offer-name {
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 1rem;
    font-weight: 600;
  }
  .offer-price {
    margin-top: 1rem;
    font-size: 1.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    flex-direction: column;
  }
  .item-description {
    margin-top: 0.5rem;
    padding: 0 1rem;
    height: 30vh;
    overflow: auto;
    text-align: left;
  }
  .options {
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-content: flex-end;
  }
  .quantity-options {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .quantity-options .quantity-text {
    flex: 1;
    text-align: right;
    font-size: 1rem;
  }
  .quantity {
    flex: 1;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }
  .quantity input {
    margin: 0 0.2rem;
    width: 30%;
    text-align: center;
  }
  .availability {
    flex: 1;
    text-align: left;
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    .item-container {
      flex-direction: column;
      width: 95%;
    }
    .gallery {
      padding-top: 0.5rem;
    }
    .offer-price {
      font-size: 1rem;
    }
    .call-seller {
      font-size: 0.72rem;
    }
    .seller {
      padding-left: 1rem;
    }
  }
`;
export default SingleOffer;
