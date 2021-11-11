import { useSelector } from "react-redux";
import { selectError } from "../../redux/imagesSlice";

function Error() {
  const error = useSelector(selectError);
  const handleReloadClick = () => {
    window.location.reload();
  }
  return (
    <div class="row justify-content-center mt-5">
      <div class="col-md-12 text-center">
        <div class="mb-4 lead">{error}</div>
        <button onClick={handleReloadClick} class="btn btn-link">
          Reload page
        </button>
      </div>
    </div>
  );
}

export default Error;
