import React from "react";
import Close from "../../assets/images/close.png";
import foodifox from "../../assets/images/page-01.png";
import movingMindz from "../../assets/images/page-02.png";
import stemblr from "../../assets/images/page-03.png";
import pikcha from "../../assets/images/page-04.png";

const Project = ({ project, changeProject }) => {
  const image = () => {
    if (project === "foodifox") {
      return foodifox;
    } else if (project === "movingMindz") {
      return movingMindz;
    } else if (project === "stemblr") {
      return stemblr;
    } else if (project === "pikcha") {
      return pikcha;
    } else return null;
  };

  return (
    <div
      className={`project-container ${project === "" ? "inactive" : "active"}`}
    >
      <img src={Close} onClick={() => changeProject("")} />
      <div className="project-wrapper">
        <img src={image()} />
      </div>
    </div>
  );
};

export default Project;
