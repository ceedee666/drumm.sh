import * as React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'

const TeachingPage = () => {
  return (
    <Layout pageInfo={{ pageName: 'teaching' }}>
      <SEO title="drumm.sh | Teaching" />
      Here you will soon find information regarding my lectures at the <a href='http://www.fh-aachen.de' target='_blank' rel='noreferrer'>FH Aachen</a> as
      well as the thesis I supervised.
    </Layout>
  )
}

export default TeachingPage
