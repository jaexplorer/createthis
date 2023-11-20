import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
  const [copied, setCopied] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      MeImg: file(relativePath: { eq: "pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      GithubIcon: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      ContactIcon: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  const MeImg = data.MeImg.childImageSharp.fluid;
  const ContactIcon = data.ContactIcon.childImageSharp.fluid;
  const GithubIcon = data.GithubIcon.childImageSharp.fluid;

  const copyText = () => {
    var text = "andrewsabato8@gmail.com";
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied("Email copied!");
      },
      err => {
        setCopied("Couldn't copy email!");
        console.log(err);
      },
      setTimeout(() => {
        setCopied(false);
      }, 1000)
    );
  };

  return (
    <div className="header">
      <div className="img-container">
        <Img fluid={MeImg} />
      </div>

      <div className="me-container">
        <div className="rev-block">
          <h1>Andrew Sabato</h1>
        </div>
        <div className="rev-block">
          <h5>Fullstack Developer</h5>
        </div>
      </div>
      <a
        href="https://github.com/jaexplorer"
        target="_blank"
        className="github-icon"
      >
        <div className="img-container">
          <Img fluid={GithubIcon} />
        </div>
      </a>
      <div className="contact-icon" onClick={copyText}>
        <div className="img-container">
          <Img fluid={ContactIcon} />
        </div>
      </div>
      <div className={`copied ${copied ? "active" : "inactive"}`}>{copied}</div>

      <div className="border"></div>
    </div>
  );
};

export default Header;
