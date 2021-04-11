import * as React from "react"

import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import {blogBody} from '../styles/blog.module.scss'

const ProjectsPage = () => {
  const projectsMainPage = useStaticQuery(graphql`
    query projectsMainPage {
      file (
        sourceInstanceName: {eq: "projects" }
        name: { eq: "main"  }        
      ){
        childMarkdownRemark{
          html         
        }    
      }
    }
  `)

  return (
    <Layout pageInfo={{ pageName: 'projects' }}>
      <SEO title="drumm.sh | Projects" />
      <div className={blogBody} dangerouslySetInnerHTML={{__html: projectsMainPage.file.childMarkdownRemark.html}}/>
    </Layout>
  )
}

export default ProjectsPage
