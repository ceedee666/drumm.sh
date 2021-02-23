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
      <Header siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
      <main >
        <div className={`${LayoutStyles.myMain} mx-auto px-3`}>
        {children}
        </div>
      </main>
      <Footer/>
    </>
  )
}


export default Layout
