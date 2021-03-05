import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { graphql  } from 'gatsby'
import { BiCalendar } from 'react-icons/bi';
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogStyles from '../styles/blog.module.scss'

export const query = graphql`
  query ($slug: String!, $dir: String!) {
    markdownRemark (fields:{ slug: { eq: $slug  }  }){
      frontmatter {
        title
      }
      fields {
        changeTime
      }
      html
    }
    
    allFile(
      filter: {
        dir: {
          eq: $dir 
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

const Page = (props) => {
  const pageImage = props.data.allFile.edges[0] ? props.data.allFile.edges[0].node.childImageSharp.original.src : null

  return (
    <Layout>
      <SEO 
        title={`drumm.sh | ${props.data.markdownRemark.frontmatter.title}`}
        image={pageImage}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <Row className='mb-5'>
        <Col className={BlogStyles.blogDateTime}>
          <BiCalendar /> {moment(props.data.markdownRemark.fields.date).format('DD. MMMM YYYY')}  
        </Col>
      </Row>

      <div className={BlogStyles.blogBody} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )

}

export default Page
