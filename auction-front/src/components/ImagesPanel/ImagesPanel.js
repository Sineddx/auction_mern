import Thumbnails from "./Thumbnails/Thumbnails";
import FormRowFile from "../FormRowFile/FormRowFile";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./ImagesPanel.styled";

const ImagesPanel = ({ handleImage }) => {
  const { urls, currentUrl, changeBigPhoto, isLoading } = useAppContext();

  return (
    <Wrapper>
      <FormRowFile handleChange={handleImage} hide={true} id="image" />
      <div className="big-photo-container">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <img src={currentUrl} role="presentation" className="big-image" />
        )}
      </div>
      <div className="thumbs">
        <Thumbnails urls={urls} changeBigPhoto={changeBigPhoto} />
        <label htmlFor="image">
          <div className="small-image add-new">
            <div className="plus-button">+</div>
          </div>
        </label>
      </div>
    </Wrapper>
  );
};

export default ImagesPanel;
