import Image from "./Image/Image";
import { useSelector } from "react-redux";
import { selectImages } from "../../redux/imagesSlice";

function Grid() {
  const images = useSelector(selectImages);

  return (
    <div className="d-flex flex-wrap">
      {images.map((image, index) => (
        <Image key={index} source={image.media.m} published={image.published} />
      ))}
    </div>
  );
}

export default Grid;
