module.exports = {
  siteMetadata: {
    title: "drumm.sh",
    author: "Christian Drumm",
    siteUrl: "https://drumm.sh",
    description: "Blog, lectures and projects by Prof. Dr. Christian Drumm.",
    mastodon: "https://mastodon.social/@ceedee666",
    commentsRepo: "ceedee666/drumm.sh-comments",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
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
                  },
                );
              });
            },
            query: `{
              allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
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
