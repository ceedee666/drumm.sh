import React from "react";
import { Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import { BiTime, BiCalendar } from "react-icons/bi";
import { format, formatDistanceToNow } from "date-fns";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Comments from "../components/comments";

import { blogBody, blogDateTime } from "../styles/blog.module.scss";

export const query = graphql`
  query ($slug: String!, $dir: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
    allFile(filter: { dir: { eq: $dir }, extension: { in: ["png", "jpg"] } }) {
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

const BlogPost = (props) => {
  const blogImage = props.data.allFile.edges[0]
    ? props.data.allFile.edges[0].node.childImageSharp.original.src
    : null;

  const dateObj = new Date(props.data.markdownRemark.frontmatter.date);
  const formattedDate = format(dateObj, "dd. MMMM yyyy");
  const relativeDate = formatDistanceToNow(dateObj, {
    addSuffix: true,
  });

  return (
    <Layout>
      <SEO
        title={`drumm.sh | Blog | ${props.data.markdownRemark.frontmatter.title}`}
        image={blogImage}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <Row className="mb-5">
        <Col className={blogDateTime}>
          <BiCalendar /> Published on {formattedDate} ({relativeDate}) &bull;{" "}
          <BiTime /> {props.data.markdownRemark.timeToRead} min read
        </Col>
      </Row>

      <div
        className={blogBody}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <div className="mt-5">
        <Row>
          <Col>
            <Comments />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default BlogPost;
