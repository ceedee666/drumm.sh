const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent);
    const collection = parent.sourceInstanceName;
    const fileDir = path.dirname(node.fileAbsolutePath);
    const relativeFilePath = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: "collection",
      value: collection,
    });

    createNodeField({
      node,
      name: "changeTime",
      value: parent.changeTime,
    });

    createNodeField({
      node,
      name: "slug",
      value: `/${collection}${relativeFilePath}`,
    });

    createNodeField({
      node,
      name: "dir",
      value: fileDir,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve("./src/templates/post.js");
  const pageTemplate = path.resolve("./src/templates/page.js");

  const pages = await graphql(`
    query markdownPages {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
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
  `);

  pages.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: ["blog", "student-blog"].includes(edge.node.fields.collection)
        ? blogTemplate
        : pageTemplate,
      path: `${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        dir: edge.node.fields.dir,
      },
    });
  });
};

module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type Student implements Node {
      name: String!
      image: File @link(by: "publicURL") # Ensures image is always treated as a File
      socialLinks: [SocialLink]
    }

    type SocialLink {
      type: String
      url: String
    }
  `);
};
module.exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  // Only needed for SSR builds
  if (stage !== "build-html" && stage !== "develop-html") return;

  const config = getConfig();

  // Fix ESM packages that ship .mjs / fully-specified imports during SSR
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  // Some ESM packages require disabling "fully specified" resolution in webpack 5
  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false,
    },
  });

  actions.replaceWebpackConfig(config);
};
