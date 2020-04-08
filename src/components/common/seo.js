import React from "react";
import Helmet from "react-helmet";

function SEO({ description, title, author }) {
  return (
    <Helmet>
      <title>CreateThis | {title}</title>
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="siteUrl" content="https://createthis.com.au" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=0.7"
      ></meta>

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

SEO.defaultProps = {
  title: "",
  description: `description test`,
  author: "Andrew Sabato",
};

export default SEO;
