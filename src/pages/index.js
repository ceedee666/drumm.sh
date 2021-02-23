import * as React from "react"
import { Media } from 'react-bootstrap'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'


const HomePage = () => {
  const avatarImg = useStaticQuery(graphql`
    query avataImage {
      file(sourceInstanceName: {eq: "images"}, name: {eq: "avatar"}) {
        childImageSharp {
          fixed(width:180) {
            ... GatsbyImageSharpFixed
          }  
        }
      }
    }
  `)

  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <Media>
        <Img 
          fixed={avatarImg.file.childImageSharp.fixed} 
          className='rounded-circle align-self-center mr-5'
          alt='Prof. Dr. Christian Drumm'/>
      <Media.Body>
        <h1>Prof. Dr. Christian Drumm</h1>
        <ul className='list-unstyled'>
          <li>Professor of Information Systems @ <a href='https://www.fh-aachen.de/' target='_blank' rel='noreferrer'>FH Aachen</a></li>
          <li>Founder and Coach @ <a href='https://www.trans4m.io/' target='_blank' rel='noreferrer'>trans4mio</a></li>
          <li><a href='https://community.sap.com/programs/influencer-programs/champions' target='_blank' rel='noreferrer'>SAP Champion</a> and Member of the <a href='https://events.sap.com/de/sap-next-gen/en/contact' target='_blank' rel='noreferrer'>SAP DACH Academic Board</a></li>
          <li>Author @ <a href='https://www.rheinwerk.de/' target='_blank' rel='noreferrer'>Rheinwerk</a></li>
        </ul>
      </Media.Body>
      </Media>  
    </Layout>
  )
}

export default HomePage
