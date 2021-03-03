import React from "react"
import { Row, Col} from 'react-bootstrap'
import { BiTime, BiCalendar } from 'react-icons/bi';
import moment from 'moment'

import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query blogPosts {
      allMarkdownRemark
      (
        filter: {frontmatter: {published: {eq: true}}} 
        sort: { fields: [frontmatter___date], order: DESC  }
      )
      {
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
  `)

  return (
    <Layout pageInfo={{ pageName: "blog" }} >
      <SEO title="drumm.sh | Blog" />
      {data.allMarkdownRemark.edges.map( edge => {
        return (
          <div className={BlogStyles.blogListItem}>
            <Link to={`/blog/${edge.node.fields.slug}`} >
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <Row>
              <Col className={BlogStyles.blogDateTime}>
                <BiCalendar /> {moment(edge.node.frontmatter.date).format('DD. MMMM YYYY')}  &bull;  <BiTime /> {edge.node.timeToRead} min read
              </Col>
            </Row>
            <Row >
              <Col className='mt-2 mb-5'>
                {edge.node.frontmatter.description}
              </Col>
            </Row>
          </div>
        )
      } )}
    </Layout>

  )
}

export default BlogPage 
