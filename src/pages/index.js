import * as React from "react";
import { Row, Col, Image } from "react-bootstrap";

import { graphql, useStaticQuery } from "gatsby";

import {
  SiApplepodcasts,
  SiMastodon,
  SiSap,
  SiYoutube,
  SiGithub,
} from "react-icons/si";

import Layout from "../components/layout";
import SEO from "../components/seo";

const HomePage = () => {
  const avatarImg = useStaticQuery(graphql`
    query avataImage {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <SEO title="drumm.sh" />
      <Row>
        <Col md={4}>
          <Row>
            <Image
              src={
                avatarImg.file.childImageSharp.gatsbyImageData.images.fallback
                  .src
              }
              roundedCircle
              alt="Prof. Dr. Christian Drumm"
            />
          </Row>
          <Row>
            <Col className="text-center">
              <h2>
                <a
                  href="https://mastodon.social/@ceedee666"
                  target="_blank"
                  rel="me"
                  aria-label="Link to my mastodon account"
                >
                  <SiMastodon />
                </a>
              </h2>
            </Col>
            <Col className="text-center">
              <h2>
                <a
                  href="https://people.sap.com/christian.drumm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my SAP community account"
                >
                  <SiSap />
                </a>
              </h2>
            </Col>
            <Col className="text-center">
              <h2>
                <a
                  href="https://www.youtube.com/c/christiandrumm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my YouTube channel"
                >
                  <SiYoutube />
                </a>
              </h2>
            </Col>
            <Col className="text-center">
              <h2>
                <a
                  href="https://github.com/ceedee666"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my Github account"
                >
                  <SiGithub />
                </a>
              </h2>
            </Col>
            <Col className="text-center">
              <h2>
                <a
                  href="https://creators.spotify.com/pod/show/christiandrumm/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my podcast"
                >
                  <SiApplepodcasts />
                </a>
              </h2>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <h1>Prof. Dr. Christian Drumm</h1>
          </Row>
          <Row>
            <ul className="list-unstyled">
              <li>
                Professor of Information Systems @{" "}
                <a
                  href="https://www.fh-aachen.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FH Aachen
                </a>
              </li>
              <li>
                Founder, Coach and Consultant @{" "}
                <a
                  href="https://www.trans4m.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  trans4mio
                </a>
              </li>
              <li>
                Coach @{" "}
                <a
                  href="https://ase-coaching.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ASE Coaching
                </a>
              </li>

              <li>
                <a
                  href="https://community.sap.com/programs/influencer-programs/champions"
                  target="_blank"
                  rel="noreferrer"
                >
                  SAP Champion
                </a>{" "}
                and former member of the{" "}
                <a
                  href="https://events.sap.com/de/sap-next-gen/en/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  SAP DACH Academic Board
                </a>
              </li>
              <li>
                Co-Founder of the{" "}
                <a
                  href="https://wiki.scn.sap.com/wiki/display/events/ABAP+CodeRetreat"
                  target="_blank"
                  rel="noreferrer"
                >
                  ABAP CodeRetreat
                </a>
              </li>
              <li>
                Author @{" "}
                <a
                  href="https://drumm.sh/s4buch"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rheinwerk
                </a>{" "}
                and{" "}
                <a href="https://drumm.sh/et" target="_blank" rel="noreferrer">
                  Espresso Tutorials
                </a>
              </li>
              <li>
                List of my{" "}
                <a
                  href="https://www.fh-aachen.de/menschen/drumm/veroeffentlichungen"
                  target="_blank"
                  rel="noreferrer"
                >
                  publications
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
