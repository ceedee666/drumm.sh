import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

import { GiTeapotLeaves } from 'react-icons/gi';
import { FaRss } from 'react-icons/fa';
import { IconContext  } from "react-icons";

import { myFooter, rssIcon } from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={`footer py-2 bg-dark`}>
      <div className={`${myFooter} mx-auto`}>
        <Container>
          <Row >
            <Col md={1}></Col>
            <Col className="text-center text-secondary">
              <IconContext.Provider value={{ color: "LightGreen" }}>
                Made with lots of <a href='https://en.wikipedia.org/wiki/Green_tea' target='_blank' rel='noreferrer'>
                  <GiTeapotLeaves  aria-label='Tea Pot'/></a>.
              </IconContext.Provider>
            </Col>
            <Col md={1} className="text-right text-secondary">
              <IconContext.Provider value={{ className: `${rssIcon}` }}>
                <Link to="/rss.xml">
                  <FaRss  aria-label='Link to RSS Feed'/>
                </Link>
              </IconContext.Provider>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )  
}

export default Footer
