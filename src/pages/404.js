import React from "react";
import SEO from "../components/common/seo";
import Layout from "../components/layout/layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notfound">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
