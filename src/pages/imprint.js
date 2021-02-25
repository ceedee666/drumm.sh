import React from 'react'

import Layout from '../components/layout'

const ImprintPage = () => {
  return (
    <Layout pageInfo={{ pageName: 'imprint' }}>
      <h3>Legal Disclosure</h3>
      <p>Information in accordance with Section 5 TMG</p>
      <p>Christian Drumm
        <br/>Eupener Straße 70
        <br/>52066 Aachen
      </p>
      <h3>Contact Information</h3>
      <p>
        Telephone: <a href="tel:+49 241 6009-51976">+49 241 6009-51976</a>
        <br/>E-Mail: <a href="mailto:drumm@fh-aachen.de">drumm@fh-aachen.de</a>
      </p>
      <h3>Disclaimer</h3>
      <p>Accountability for content
        <br/>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
        accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for 
        our own content on these web pages. In this matter, please note that we are not obliged to monitor 
        the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. 
        Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per 
        §§ 8 to 10 of the Telemedia Act (TMG).</p>

      <p>Accountability for links
        <br/>Responsibility for the content of 
        external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were 
        evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective 
        link immediately.</p>

      <p className="pb-5">Copyright
        <br/> Our web pages and their contents are subject to German copyright law. Unless 
        expressly permitted by law, every form of utilizing, reproducing or processing 
        works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. 
        Individual reproductions of a work are only allowed for private use. 
        The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>

    </Layout>
  )
}

export default ImprintPage
