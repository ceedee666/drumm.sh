import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Comments = () => {
  // implementation is based on this post
  // https://divyanshu013.dev/blog/gatsby-comments-utterances/
  // https://dev.to/creativcoder/how-to-add-comment-support-on-your-gatsby-blog-using-github-utterances-423n

  const data = useStaticQuery(graphql`
    query RepoQuery {
      site {
        siteMetadata {
          commentsRepo
        }
      }
    }
  `)

  const commentsRef = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', data.site.siteMetadata.commentsRepo)
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'comment :speech_balloon:')
    script.setAttribute(
      'theme',
      'github-light'
    )
    script.setAttribute('crossorigin', 'anonymous')

    commentsRef.current.appendChild(script)

  }, [data])

  return (
    <div ref={commentsRef}/>
  )
}

export default Comments
