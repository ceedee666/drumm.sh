import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { blogBody } from "../styles/blog.module.scss";

const CeloqPage = () => {
  const celoqMainPage = useStaticQuery(graphql`
    query celoqMainPage {
      file(sourceInstanceName: { eq: "celoq" }, name: { eq: "main" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "celoq" }}>
      <SEO title="celoq | Your privacy-first wellbeing companion." />
      <div
        className={blogBody}
        dangerouslySetInnerHTML={{
          __html: celoqMainPage.file.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default CeloqPage;
