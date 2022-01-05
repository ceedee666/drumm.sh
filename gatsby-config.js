module.exports = {
  siteMetadata: {
    title: "drumm.sh",
    author: "Christian Drumm",
    siteUrl: "https://drumm.sh",
    description: "Blog, lectures and projects by Prof. Dr. Christian Drumm.",
    twitter: "@ceedee666",
    commentsRepo: "ceedee666/drumm.sh-comments",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme: "Dark+ (default dark)",
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./content/blog/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "teaching",
        path: "./content/teaching/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "student-blog",
        path: "./content/student-blog/",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./content/projects/",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `{
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign(
                  {},
                  {},
                  {
                    title: edge.node.frontmatter.title,
                    description: edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  }
                );
              });
            },
            query: `{
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date]  }
                filter: { fields: { slug: { regex: "//(blog|student-blog)/.*/"  }  }  }
               ) {
                 edges {
                   node {
                     excerpt
                     html
                     fields {
                       slug
                     }
                     frontmatter {
                       title
                       date
                     }
                   }
                 }
               }
            }`,
            output: "/rss.xml",
            title: "drumm.sh: Recent Blogs RSS Feed",
          },
        ],
      },
    },
  ],
};
