import * as React from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not Found" />
    <Row>
      <Col md={2} className="align-self-center">
        <h1 class="display-1">
          <span role="img" aria-label="This is a bug.">
            🐛
          </span>
        </h1>
      </Col>
      <Col>
        <h1>Have you tried turning it off and on again?</h1>
        <p>
          We couldn't find the page you are looking for. Here are some helpful
          links instead:
        </p>
        <div>
          <Link to={`/teaching`}>My Lectures at FH Aachen</Link>
        </div>
        <div>
          <Link to={`/blog`}>My Blog</Link>
        </div>
        <div>
          <Link to={`/student-blog`}>Student's Blog</Link>
        </div>
        <div>
          <Link to={`/`}>Back to start</Link>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default NotFoundPage;
