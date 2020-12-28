const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
  query {
    allContentfulBlogSite {
      edges {
        node {
          author
          content {
            raw
          }
          excerpt
          image {
            fluid {
              src
            }
          }
          slug
          title
        }
      }
    }
  }
  
  
   `);

   console.log(response)
  response.data.allContentfulBlogSite.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/template/blog-post.tsx"),
      context: {
        data: edge
      },
    })
  })             
}