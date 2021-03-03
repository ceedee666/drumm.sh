import React from "react"
import { Helmet  } from "react-helmet"
import { useStaticQuery, graphql  } from "gatsby"

import faviconleg from '../images/favicon.ico'
import favicon32 from "../images/favicon-32x32.png"
import touchicon from "../images/apple-touch-icon.png"
import logo512 from "../images/android-chrome-512x512.png"

function SEO({ description, title, creator, image  }) {
  const { site  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            twitter
          }
        }
     }`
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaSiteUrl = site.siteMetadata.siteUrl
  const metaImage = image ? metaSiteUrl+image : metaSiteUrl+logo512
  const metaTwitter = creator ? '@'+creator : site.siteMetadata.twitter

  console.log(metaImage)

  return (
    <Helmet>
      <html lang="en"/>
      {/* Icons */}
      <link rel="icon" href={faviconleg} />
      <link rel="icon" type="image/png" href={favicon32} />
      <link rel="shortcut icon" type="image/x-icon" href={favicon32} />

      {/* iOS meta tags */}
      <link rel="apple-touch-icon" sizes="180x180" href={touchicon} />
      <meta name="apple-mobile-web-app-capable" content="no" />
      <meta name="apple-mobile-web-app-title" content={site.siteMetadata.title} />

      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaSiteUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metaTwitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>

  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,

}

export default SEO
