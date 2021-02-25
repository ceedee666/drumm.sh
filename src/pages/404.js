import * as React from "react"
import {Row, Col} from "react-bootstrap"

import { Link } from "gatsby"

import Layout from '../components/layout'

const NotFoundPage = ({ data  }) => (
  <Layout>
    <Row>
      <Col md={2} className='align-self-center'>
        <h1 class="display-1">
          <span role='img' aria-label='This is a bug.'>
            🐛
          </span>
        </h1>
      </Col>
      <Col>
        <h1>Have you tried turning if off and on again?</h1>
        <p>We couldn't find the page you are looking for. Here are some helpful links instead:</p>
        <Link to={`/`}>Back to start</Link>
      </Col>
    </Row>
  </Layout>

)

export default NotFoundPage
