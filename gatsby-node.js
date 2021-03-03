const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    const dir = path.dirname(node.fileAbsolutePath)

    createNodeField({
      node, 
      name: 'slug',
      value: slug
    })

    createNodeField({
      node, 
      name: 'dir',
      value: dir
    })
  }
}


module.exports.createPages = async ({ graphql, actions   }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/post.js')

  const res = await graphql(`
    query blogPosts {
      allMarkdownRemark 
      (
        filter: {frontmatter: {published: {eq: true}}} 
      )
      {
        edges {
          node {
            fields {
              slug
              dir
            }
          }        
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach( edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        dir: edge.node.fields.dir
      }
    })
  })

}
