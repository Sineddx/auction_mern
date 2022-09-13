import { useAppContext } from "../../../context/appContext";

const Thumbnails = ({ urls, changeBigPhoto }) => {
  const changePhotoAndClass = (e) => {
    let els = document.getElementsByClassName("active");
    if (els) {
      while (els[0]) {
        els[0].classList.toggle("active");
      }
    }
    e.target.classList.toggle("active");
    changeBigPhoto(e);
  };
  const { deleteImageFromCloud } = useAppContext();

  const deleteHandler = (id) => {
    deleteImageFromCloud(id);
  };

  return urls.map((url, index) => {
    return (
      <div key={index} className="small-image-settings">
        <img
          src={url.url}
          className={`small-image ${index === 0 ? "active" : ""}`}
          onClick={changePhotoAndClass}
        ></img>
        <div className="delete" onClick={() => deleteHandler(url.id)}>
          usuń
        </div>
      </div>
    );
  });
};
export default Thumbnails;
