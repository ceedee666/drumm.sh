import { graphql } from "gatsby";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";

import { format, formatDistanceToNow } from "date-fns";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { blogBody, blogDateTime } from "../styles/blog.module.scss";

const formatChangeTime = (dateString) => {
  const date = new Date(dateString);
  return `${formatDistanceToNow(date, { addSuffix: true })} (${format(date, "dd. MMMM yyyy")})`;
};

export const query = graphql`
  query ($slug: String!, $dir: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      fields {
        changeTime
      }
      html
    }

    allFile(
      filter: { dir: { eq: $dir }, extension: { in: ["png", "jpg", "gif"] } }
    ) {
      edges {
        node {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;

const Page = (props) => {
  const pageImage = props.data.allFile.edges[0]
    ? props.data.allFile.edges[0].node.childImageSharp.original.src
    : null;

  return (
    <Layout>
      <SEO
        title={`drumm.sh | ${props.data.markdownRemark.frontmatter.title}`}
        image={pageImage}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <Row className="mb-5">
        <Col className={blogDateTime}>
          <BiCalendar /> Last updated:{" "}
          {formatChangeTime(props.data.markdownRemark.fields.changeTime)}
        </Col>
      </Row>

      <div
        className={blogBody}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  );
};

export default Page;
