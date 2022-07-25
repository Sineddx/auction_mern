import styled from "styled-components";
import Thumbnails from "./Thumbnails";
import FormRowFile from "./FormRowFile";

const ImagesPanel = ({ urls, handleImage, currentUrl }) => {
  return (
    <Wrapper>
      <input
        type="file"
        style={{ display: "none" }}
        id="image"
        onChange={handleImage}
      ></input>
      <div className="big-photo-container">
        <img src={currentUrl} role="presentation" className="big-image" />
      </div>
      <div className="thumbs">
        {/* <div className="small-image-settings">
          <img
            src="https://res.cloudinary.com/chmuramacieja/image/upload/v1658740377/product-images/tmp-16-1658740376393_tsvg11.jpg"
            className="small-image"
          ></img>
          <div className="delete">usuń</div>
        </div> */}
        <Thumbnails urls={urls} />
        <div className="small-image add-new">
          <label htmlFor="image" className="add-new-image">
            +
          </label>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  .add-new-row {
    display: none;
  }
  .big-photo-container {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .big-image {
    width: 90%;
  }
  .small-image {
    width: 60px;
    height: 60px;
  }
  .add-new {
    border: 1px solid var(--card-bg);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .thumbs {
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
    gap: 10px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  .small-image-settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: var(--card-bg);
    font-size: small;
    gap: 5px;
  }
  .delete {
    cursor: pointer;
    font-weight: 700;
  }
  .active {
    border: 3px solid var(--card-bg);
  }
  .add-new-image {
    background-color: var(--card-bg);
    border-radius: 50%;
    width: 40%;
    height: 40%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
  }
`;
export default ImagesPanel;
