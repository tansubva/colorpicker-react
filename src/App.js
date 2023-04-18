import React, { useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import Wrapper from "./components/Wrapper";

function App() {
  const [activeColor, setActiveColor] = useState(1);
  const [wrapperColor, setWrapperColor] = useState("#fff");

  const handleCircleClick = (color) => {
    setActiveColor(color);
    switch (color) {
      case 1:
        setWrapperColor("rgb(241, 117, 119)");
        break;
      case 2:
        setWrapperColor("rgb(236, 206, 151)");
        break;
      case 3:
        setWrapperColor("rgb(116, 224, 121)");
        break;
      case 4:
        setWrapperColor("#5cf");
        break;
      case 5:
        setWrapperColor("rgb(189, 125, 231)");
        break;
      default:
        setWrapperColor("#fff");
    }
  };

  return (
    <div className="bg" style={{ backgroundColor: wrapperColor }}>
      <Wrapper>
        {[1, 2, 3, 4, 5].map((num) => (
          <Circle
            key={num}
            isActive={activeColor === num}
            color={num}
            onClick={() => handleCircleClick(num)}
            className={`color-${num}`}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default App;
