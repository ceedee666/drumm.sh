const path = require('path')

module.exports.onCreateNode = ({node, actions, getNode }) => {
  const {createNodeField} = actions

  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent)
    const slug = path.basename(node.fileAbsolutePath, '.md')
    const dir = path.dirname(node.fileAbsolutePath)

    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName
    })

    createNodeField({
      node,
      name: 'changeTime',
      value: parent.changeTime
    })

    createNodeField({
      node, 
      name: 'slug',
      value: `/${parent.sourceInstanceName}/${slug}`
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
  const pageTemplate = path.resolve('./src/templates/page.js')

  const pages = await graphql(`
    query markdownPages {
      allMarkdownRemark 
      (
        filter: {
          frontmatter: { published: { eq: true } } } 
      )
      {
        edges {
          node {
            fields {
              collection
              slug
              dir
            }
          }        
        }
      }
    }
  `)

  pages.data.allMarkdownRemark.edges.forEach( edge => {
    createPage({
      component: edge.node.fields.collection === 'blog' ? blogTemplate : pageTemplate,
      path: `${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        dir: edge.node.fields.dir
      }
    })
  })

}
