import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

import { Container, Navbar, Nav} from "react-bootstrap"

import NavbarStyles from '../styles/navbar.module.scss'

const CustomNavbar = ({ pageInfo  }) => {

   const brandingImg = useStaticQuery(graphql`
    query brandingImg {
      file(sourceInstanceName: {eq: "images"}, name: {eq: "avatar"}) {
        childImageSharp {
          fixed(width: 30) {
            ... GatsbyImageSharpFixed
          }  
        }
      }
    }
  `)

  return (
    <div className={`${NavbarStyles.myNavbar} mx-auto`}>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container className='px-0'> 
          <Link to="/" className={NavbarStyles.navItem}>
            <Navbar.Brand>
              <Img fixed={brandingImg.file.childImageSharp.fixed} className='rounded-circle' />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className={NavbarStyles.navItem} activeClassName={NavbarStyles.activeNavItem}>
                <Nav.Link as="span" eventKey='home'>
                  Home
                </Nav.Link>
              </Link>
              <Link to="/blog" className={NavbarStyles.navItem} activeClassName={NavbarStyles.activeNavItem}>
                <Nav.Link as="span" eventKey='blog'>
                  Blog
                </Nav.Link>
              </Link>
              <Link to="/teaching" className={NavbarStyles.navItem} activeClassName={NavbarStyles.activeNavItem}>
                <Nav.Link as="span" eventKey='teaching'>
                  Teaching
                </Nav.Link>
              </Link>
              <Link to="/projects" className={NavbarStyles.navItem} activeClassName={NavbarStyles.activeNavItem}>
                <Nav.Link as="span" eventKey='projects'>
                  Projects
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    </div>
  )

}

export default CustomNavbar
