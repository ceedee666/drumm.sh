import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

import {
  myNavbar,
  navItem,
  activeNavItem,
  activeDropdownItem,
} from "../styles/navbar.module.scss";

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
      <Navbar data-bs-theme="dark" bg="dark" expand="sm">
        <Container className="px-0">
          <Navbar.Brand href="/">
            <Image
              src={
                brandingImg.file.childImageSharp.gatsbyImageData.images.fallback
                  .src
              }
              roundedCircle
              alt="Prof. Dr. Christian Drumm"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Nav.Link as={Link} to="/" className={navItem} eventKey="home">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/teaching"
                className={navItem}
                eventKey="teaching"
              >
                Teaching
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className={navItem}
                eventKey="projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/wall-of-fame"
                className={navItem}
                eventKey="wall-of-fame"
              >
                Wall of Fame
              </Nav.Link>
              <NavDropdown
                title="Blogs"
                id="blogs-dropdown"
                className={navItem}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/blog"
                  className={navItem}
                  eventKey="blog"
                >
                  My Blog
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/student-blog"
                  eventKey="student-blog"
                  className={navItem}
                >
                  Student's Blog
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="On Air"
                id="on-air-dropdown"
                className={navItem}
                eventKey="podcast"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/podcast"
                  className={navItem}
                  eventKey="podcast"
                >
                  Podcast
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/videos"
                  eventKey="videos"
                  className={navItem}
                >
                  Videos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav activeKey={pageInfo && pageInfo.pageName}>
              <Nav.Link
                as={Link}
                to="/imprint"
                className={navItem}
                eventKey="imprint"
              >
                Imprint
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/privacy"
                className={navItem}
                eventKey="privacy"
              >
                Privacy
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
