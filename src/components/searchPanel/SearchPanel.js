import "./SearchPanel.scss";

const SearchPanel = (props) => {
  return (
    <div className="SearchPanel">
      <input
        placeholder="Search your city..."
        onKeyDown={props.onChangeValue}
      />
    </div>
  );
};

export default SearchPanel;
