import React from "react";
import Close from "../../assets/images/close.png";
// import foodifox from "../../assets/images/page-01.png";
// import movingMindz from "../../assets/images/page-02.png";
// import stemblr from "../../assets/images/page-03.png";
// import pikcha from "../../assets/images/page-04.png";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Project = ({ project, changeProject }) => {
  const data = useStaticQuery(graphql`
    query {
      foodifox: file(relativePath: { eq: "page-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      movingMindz: file(relativePath: { eq: "page-02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      stemblr: file(relativePath: { eq: "page-03.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      pikcha: file(relativePath: { eq: "page-04.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const image = () => {
    if (project === "foodifox") {
      return data.foodifox.childImageSharp.fluid;
    } else if (project === "movingMindz") {
      return data.movingMindz.childImageSharp.fluid;
    } else if (project === "stemblr") {
      return data.stemblr.childImageSharp.fluid;
    } else if (project === "pikcha") {
      return data.pikcha.childImageSharp.fluid;
    } else return null;
  };

  return (
    <div
      className={`project-container ${project === "" ? "inactive" : "active"}`}
    >
      <img src={Close} onClick={() => changeProject("")} />
      <div className="project-wrapper">
        <Img fluid={image()} />
      </div>
    </div>
  );
};

export default Project;
