import ToggleButton from "../button/toggleButton";
import "./AppHeader.scss";

const AppHeader = (props) => {
  const switchMode = () => {
    props.setToggle(!props.toggle);
  };

  if (props.toggle) {
    document.body.style.backgroundColor = "rgba(7, 4, 41, 0.9)";
    document.body.style.backgroundBlendMode = "overlay";
  }

  if (!props.toggle) {
    document.body.style.background = "";
  }

  return (
    <header className="app__header">
      <h1 style={{ color: props.toggle ? "grey" : "rgb(47, 93, 138)" }}>
        React Weather{" "}
      </h1>
      <ToggleButton id={111} switchMode={switchMode} />
    </header>
  );
};

export default AppHeader;
