module.exports = {
  siteMetadata: {
    title: "drumm.sh",
    author: "Christian Drumm",
    siteUrl: "https://drumm.sh",
    description: "Blog, lectures and project by Prof. Dr. Christian Drumm.",
    twitter: "@ceedee666"
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
          'gatsby-remark-autolink-headers',
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 460,
            }
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Dark+ (default dark)'
            }
          },
        ]
      }
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
        name: "blog-posts",
        path: "./content/blog-posts/",
      },
    }
  ],
};
