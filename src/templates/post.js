import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { graphql  } from 'gatsby'
import { BiTime, BiCalendar } from 'react-icons/bi';
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogStyles from '../styles/blog.module.scss'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields:{ slug: { eq: $slug  }  }){
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
    allFile(
      filter: {
        dir: {
          eq: "/Users/christian/Documents/development/drumm-sh/content/blog-posts/20210226-why-i-created-my-own-webpage"
        }
        extension: {
          in: ["png", "jpg", "gif"]
        }
      }
    )
    {
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
  }`

const BlogPost = (props) => {
  console.log(props)
  return (
    <Layout>
      <SEO 
        title={`drumm.sh | Blog | ${props.data.markdownRemark.frontmatter.title}`}
        image={props.data.allFile.edges[0].node.childImageSharp.original.src}
      />
      <h1 className='display-4'>{props.data.markdownRemark.frontmatter.title}</h1>
      <Row className='mb-5'>
        <Col className={BlogStyles.blogDateTime}>
          <BiCalendar /> {moment(props.data.markdownRemark.frontmatter.date).format('DD. MMMM YYYY')}  &bull;  <BiTime /> {props.data.markdownRemark.timeToRead} min read
        </Col>
      </Row>

      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>

  )

}

export default BlogPost
