import React from "react"
import { useStaticQuery, graphql  } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import '../styles/global.scss'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ children, pageInfo }) => {

  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
   `)

  return (
    <>  
      <wrapper className='d-flex flex-column min-vh-100'>
        <Header siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
        <main className='flex-fill'>
          <div className={`${LayoutStyles.myMain} mx-auto px-3`}>
            {children}
          </div>
        </main>
        <Footer/>
      </wrapper>
    </>
  )
}


export default Layout
