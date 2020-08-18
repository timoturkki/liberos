const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query getBlogs {
      blogs: allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `);

  response.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    });
  });
};
