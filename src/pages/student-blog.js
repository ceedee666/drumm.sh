import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiTime, BiCalendar } from "react-icons/bi";
import moment from "moment";

import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { blogListItem, blogDateTime } from "../styles/blog.module.scss";

const StudentBlogPage = () => {
  const data = useStaticQuery(graphql`
    query studentBlogPosts {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "student-blog" } }
          frontmatter: { published: { eq: true } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              description
              language
            }

            timeToRead

            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "student-blog" }}>
      <SEO title="drumm.sh | Student Blog" />
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div className={blogListItem}>
            <Link to={`${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <Row>
              <Col className={blogDateTime}>
                <BiCalendar />{" "}
                {moment(edge.node.frontmatter.date).format("DD. MMMM YYYY")}{" "}
                &bull; <BiTime /> {edge.node.timeToRead} min read
              </Col>
            </Row>
            <Row>
              <Col className="mt-2 mb-5">
                {edge.node.frontmatter.description}
              </Col>
            </Row>
          </div>
        );
      })}
    </Layout>
  );
};

export default StudentBlogPage;
