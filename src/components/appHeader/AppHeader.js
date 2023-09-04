import ToggleButton from "../button/toggleButton";
import { useState, useEffect } from "react";
import nightMode from "../../resources/main_bg_nigth_mode.png";
import ligthMode from "../../resources/main_bg.jpg";

import "./AppHeader.scss";

const AppHeader = () => {
  const [toggle, setToggle] = useState(true);

  const switchMode = () => {
    document.body.style.background = `url(${
      toggle ? ligthMode : nightMode
    }) center no-repeat`;
    setToggle(!toggle);
  };

  useEffect(() => {
    switchMode();
  }, []);

  return (
    <header className="app__header">
      <h1 style={{ color: toggle ? "white" : "black" }}>React Weather </h1>
      <ToggleButton id={111} switchMode={switchMode} />
    </header>
  );
};

export default AppHeader;
