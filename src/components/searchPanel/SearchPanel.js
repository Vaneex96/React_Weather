import { useState } from "react";

import "./SearchPanel.scss";

const SearchPanel = (props) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.setInput(value);
    setValue("");
  };

  return (
    <div className="SearchPanel">
      <form
        onSubmit={onSubmitHandler}
        style={{ backgroundColor: props.toggle ? "rgb(5, 26, 51)" : "#fff" }}
      >
        <input
          onChange={onChangeValue}
          name="text"
          placeholder="Search your city..."
          style={{
            backgroundColor: props.toggle ? "rgb(5, 26, 51)" : "#fff",
            color: props.toggle ? "#fff" : "rgb(5, 26, 51)",
          }}
        ></input>
      </form>
      <button
        className="Location"
        onClick={props.onGetCurrentLocation}
      ></button>
    </div>
  );
};

export default SearchPanel;
