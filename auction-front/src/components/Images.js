import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="https://res.cloudinary.com/chmuramacieja/image/upload/v1658740377/product-images/tmp-16-1658740376393_tsvg11.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];
const Images = ({ urls }) => {
  const items = urls.map((url, index) => {
    return (
      <div className="item-container">
        <img
          src={url}
          onDragStart={handleDragStart}
          role="presentation"
          className="item"
          data-value={index + 1}
          value={index + 1}
        />
      </div>
    );
  });
  console.log(items);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
  };
  return (
    <Wrapper>
      <AliceCarousel
        controlsStrategy="alternate"
        mouseTracking
        responsive={responsive}
        items={items}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .item {
    width: 80%;
  }
  .item-container {
    display: flex;
    justify-content: center;
  }
`;
export default Images;
