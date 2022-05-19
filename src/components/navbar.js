import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Container, Navbar, Nav } from "react-bootstrap";

import { myNavbar, navItem, activeNavItem } from "../styles/navbar.module.scss";

const CustomNavbar = ({ pageInfo }) => {
  const brandingImg = useStaticQuery(graphql`
    query brandingImg {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(width: 30, layout: FIXED)
        }
      }
    }
  `);

  return (
    <div className={`${myNavbar} mx-auto`}>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container className="px-0">
          <Navbar.Brand href="/">
            <GatsbyImage
              image={brandingImg.file.childImageSharp.gatsbyImageData}
              className="rounded-circle me-2 align-middle"
              imgClassName="rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className={navItem} activeClassName={activeNavItem}>
                <Nav.Link as="span" eventKey="home">
                  Home
                </Nav.Link>
              </Link>
              <Link
                to="/teaching"
                className={navItem}
                activeClassName={activeNavItem}
              >
                <Nav.Link as="span" eventKey="teaching">
                  Teaching
                </Nav.Link>
              </Link>
              <Link
                to="/projects"
                className={navItem}
                activeClassName={activeNavItem}
              >
                <Nav.Link as="span" eventKey="projects">
                  Projects
                </Nav.Link>
              </Link>
              <Link
                to="/blog"
                className={navItem}
                activeClassName={activeNavItem}
              >
                <Nav.Link as="span" eventKey="blog">
                  Blog
                </Nav.Link>
              </Link>
              <Link
                to="/student-blog"
                className={navItem}
                activeClassName={activeNavItem}
              >
                <Nav.Link as="span" eventKey="student-blog">
                  Student's Blog
                </Nav.Link>
              </Link>
            </Nav>
            <Nav activeKey={pageInfo && pageInfo.pageName}>
              <Link
                to="/imprint"
                className={navItem}
                activeClassName={activeNavItem}
              >
                <Nav.Link as="span" eventKey="imprint">
                  Imprint
                </Nav.Link>
              </Link>
              <Link
                to="/privacy"
                className={navItem}
                activeClassName={activeNavItem}
              >
                <Nav.Link as="span" eventKey="privacy">
                  Privacy
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
