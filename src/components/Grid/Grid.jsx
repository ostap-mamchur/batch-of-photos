import Image from "./Image/Image";
import { useSelector } from "react-redux";
import { selectImages, selectStatus } from "../../redux/imagesSlice";
import Loading from "./Loading/Loading";

function Grid() {
  const images = useSelector(selectImages);
  const status = useSelector(selectStatus);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {status === "loading" ? (
        <Loading />
      ) : (
        images.map((image, index) => (
          <Image
            key={index}
            source={image.media.m}
            published={image.published}
          />
        ))
      )}
    </div>
  );
}

export default Grid;
