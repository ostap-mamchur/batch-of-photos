import { useDispatch, useSelector } from "react-redux";
import { cancelFetch, fetchImages, selectStatus } from "../../../redux/imagesSlice";

function Buttons({ tag }) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const handleSearchClick = (e) => {
    if (status === "idle" && tag) {
      dispatch(fetchImages({tag}));
    }
    e.preventDefault();
  }

  const handleCancelClick = (e) => {
    if (status === "loading") {
      dispatch(cancelFetch());
    }
    e.preventDefault();
  }

  return (
      <div className="col-auto">
        <button onClick={handleSearchClick} type="submit" className="btn btn-primary" disabled={status !== "idle"}>Search</button>
        {" "}
        <button onClick={handleCancelClick} className="btn btn-danger" disabled={status !== "loading"}>Cancel</button>
      </div>
  );
}

export default Buttons;