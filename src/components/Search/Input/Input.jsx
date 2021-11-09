function Input({ tag, setTag }) {
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="col-auto">
      <label className="visually-hidden">Tag</label>
      <input
        value={tag}
        onChange={handleTagChange}
        type="text"
        className="form-control"
        placeholder="Tag"
      />
    </div>
  );
}

export default Input;
