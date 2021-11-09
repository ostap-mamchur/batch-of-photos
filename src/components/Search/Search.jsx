import { useState } from "react";
import Buttons from "./Buttons/Buttons";
import Input from "./Input/Input";
import Tags from "./Tags/Tags";

function Search() {
  const [tag, setTag] = useState("");

  return (
    <form className="mt-4 row g-3 justify-content-center">
      <Input tag={tag} setTag={setTag} />
      <Buttons tag={tag} />
      <Tags setTag={setTag} />
    </form>
  );
}

export default Search;
