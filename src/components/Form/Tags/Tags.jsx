import { useSelector } from "react-redux";
import { selectPopularTags } from "../../../redux/tagsSlice";

function Tags({ setTag }) {
  const tags = useSelector(selectPopularTags);

  return (
    <div
      className="btn-group btn-group-sm flex-wrap"
      role="group"
      aria-label="Third group"
    >
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => {
            setTag(tag.name);
          }}
          type="button"
          className="btn btn-secondary m-1"
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}

export default Tags;
