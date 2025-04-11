import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiTime, BiCalendar } from "react-icons/bi";

import { format, formatDistanceToNow } from "date-fns";

import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { blogListItem, blogDateTime } from "../styles/blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query blogPosts {
      allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
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
    <Layout pageInfo={{ pageName: "blog" }}>
      <SEO title="drumm.sh | Blog" />
      {data.allMarkdownRemark.edges.map((edge) => {
        const dateObj = new Date(edge.node.frontmatter.date);
        const formattedDate = format(dateObj, "dd. MMMM yyyy");
        const relativeDate = formatDistanceToNow(dateObj, {
          addSuffix: true,
        });

        return (
          <div className={blogListItem}>
            <Link to={`${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <Row>
              <Col className={blogDateTime}>
                <BiCalendar /> Published on {formattedDate} ({relativeDate})
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

export default BlogPage;
