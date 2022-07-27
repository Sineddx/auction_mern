export const imageObject = ({ url, id }) => {
  console.log("w funkcji");
  const newImage = {};
  newImage.url = url;
  newImage.id = id;
  return newImage;
};
