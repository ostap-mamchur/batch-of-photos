import Search from "./components/Search/Search";
import Grid from "./components/Grid/Grid";
import { useSelector } from "react-redux";
import { selectStatus } from "./redux/imagesSlice";
import Error from "./components/Error/Error";

function App() {
  const status = useSelector(selectStatus);
  return (
    <div className="container-sm">
      {status !== "failed" ? (
        <>
          <Search />
          <Grid />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
