import * as React from "react"

import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import {blogBody} from '../styles/blog.module.scss'

const TeachingPage = () => {
  const teachingMainPage = useStaticQuery(graphql`
    query teachingMainPage {
      file (
        sourceInstanceName: {eq: "teaching" }
        name: { eq: "main"  }        
      ){
        childMarkdownRemark{
          html         
        }    
      }
    }
  `)

  return (
    <Layout pageInfo={{ pageName: 'teaching' }}>
      <SEO title="drumm.sh | Teaching" />
      <div className={blogBody} dangerouslySetInnerHTML={{__html: teachingMainPage.file.childMarkdownRemark.html}}/>
    </Layout>
  )
}

export default TeachingPage
