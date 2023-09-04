import "./toggleButton.scss";

const ToggleButton = (props) => {
  return (
    <label className="switch" id={props.id}>
      <input type="checkbox" onChange={props.switchMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
