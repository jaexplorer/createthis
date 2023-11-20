import React from "react";
import foodifox from "../../assets/images/foodifox.png";
import movingMindz from "../../assets/images/movingMindz.png";
import stemblr from "../../assets/images/stemblr.png";
import pikcha from "../../assets/images/pikcha.png";

const Dot = ({ x, y, type, changeProject }) => {
  const image = () => {
    if (type === "foodifox") {
      return foodifox;
    } else if (type === "movingMindz") {
      return movingMindz;
    } else if (type === "stemblr") {
      return stemblr;
    } else if (type === "pikcha") {
      return pikcha;
    }
  };

  return (
    <div
      onClick={() => changeProject(type)}
      className="dot"
      style={{ left: x, top: y }}
    >
      <img src={image()} />
    </div>
  );
};

export default Dot;
