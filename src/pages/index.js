import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/common/seo";
import Header from "../components/header/Header";
import OldProjects from "../components/projects/OldProjects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <OldProjects />
  </Layout>
);

export default IndexPage;
