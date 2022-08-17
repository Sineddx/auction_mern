import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useSearchParams } from "react-router-dom";

const SingleOffer = () => {
  const { getSingleOffer, singleOffer: offer } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  useEffect(() => {
    const id = searchParams.get("code");
    getSingleOffer(id);
  }, []);
  return (
    <Wrapper>
      <div className="item-container">
        <div className="gallery">
          <ImageGallery items={images} />;
        </div>
        <div className="item-info">
          <div className="offer-name">
            Szampon SHAMPOO super nowoczesny ohohohohoho
          </div>
          <div className="offer-price">{offer.price}ZŁ</div>
          <div className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="options">
            <span className="quantity">10</span>
            <button className="btn">Kup teraz</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 1rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  .item-container {
    border: 1px solid green;
    display: flex;
    justify-content: center;
    width: 70%;
    background-color: #fff;
    height: 70vh;
  }
  .gallery {
    border: 1px solid yellow;
    flex: 1;
    padding-top: 5rem;
  }

  .item-info {
    border: 1px solid green;
    flex: 1;
  }
  .offer-name {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 1rem;
  }
  .offer-price {
    font-size: 1.5rem;
  }
  .item-description {
    margin-top: 3rem;
    padding: 0 1rem;
  }
`;
export default SingleOffer;
