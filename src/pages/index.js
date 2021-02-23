import * as React from "react"

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout'


const HomePage = () => {
  const avatarImg = useStaticQuery(graphql`
    query avataImage {
      file(sourceInstanceName: {eq: "images"}, name: {eq: "avatar"}) {
        childImageSharp {
          fixed(width:250) {
            ... GatsbyImageSharpFixed
          }  
        }
      }
    }
  `)

  return (
    <Layout pageInfo={{ pageName: "home" }}>
        <Img 
          fixed={avatarImg.file.childImageSharp.fixed} 
          className='rounded-circle'
          alt='Prof. Dr. Christian Drumm'/>
    </Layout>
  )
}

export default HomePage
