const {createFilePath} = require('gatsby-source-filesystem')
const path = require('path')

module.exports.onCreateNode = ({node, actions, getNode }) => {
  const {createNodeField} = actions

  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent)
    const collection = parent.sourceInstanceName
    const fileDir = path.dirname(node.fileAbsolutePath)
    const relativeFilePath = createFilePath({node, getNode})

    createNodeField({
      node,
      name: 'collection',
      value: collection
    })

    createNodeField({
      node,
      name: 'changeTime',
      value: parent.changeTime
    })

    createNodeField({
      node, 
      name: 'slug',
      value: `/${collection}${relativeFilePath}`
    })

    createNodeField({
      node, 
      name: 'dir',
      value: fileDir
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
      component: ['blog', 'student-blog'].includes(edge.node.fields.collection) ? blogTemplate : pageTemplate,
      path: `${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        dir: edge.node.fields.dir
      }
    })
  })

}
