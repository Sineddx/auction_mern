const Thumbnails = ({ urls }) => {
  return urls.map((url, index) => {
    return (
      <div key={index} className="small-image-settings">
        <img src={url} className="small-image"></img>
        <div className="delete">usuń</div>
      </div>
    );
  });
};
export default Thumbnails;
