import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { blogBody } from "../styles/blog.module.scss";

const WallOfFamePage = () => {
  const wallOfFameMainPage = useStaticQuery(graphql`
    query wallOfFameMainPage {
      file(sourceInstanceName: { eq: "wall-of-fame" }, name: { eq: "main" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "wall-of-fame" }}>
      <SEO title="drumm.sh | Wall of Fame" />
      <div
        className={blogBody}
        dangerouslySetInnerHTML={{
          __html: wallOfFameMainPage.file.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default WallOfFamePage;
