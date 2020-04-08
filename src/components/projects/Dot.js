import React from "react";

const Dot = ({ x, y }) => {
  return (
    <div
      onClick={() => alert("Coming soon")}
      className="dot"
      style={{ left: x, top: y }}
    ></div>
  );
};

export default Dot;
