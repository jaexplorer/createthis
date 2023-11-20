import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
  </Layout>
);

export default IndexPage;
