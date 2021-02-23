import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

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
      <h1>Blog</h1>
      <ol >
        {data.allMarkdownRemark.edges.map( edge => {
          return (
            <li >
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>

          )

        } )}
      </ol>
    </Layout>

  )
}

export default BlogPage 
