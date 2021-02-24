import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

import {ListGroup} from 'react-bootstrap'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query blogPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout pageInfo={{ pageName: "blog" }} >
      <ListGroup variant='flush' >
        {data.allMarkdownRemark.edges.map( edge => {
          return (
            <ListGroup.Item>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </ListGroup.Item>
          )
        } )}
      </ListGroup>
    </Layout>

  )
}

export default BlogPage 
