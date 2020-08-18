import React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

const blog = ({ data }) => {
  const {
    allContentfulBlog: { nodes: blogs },
  } = data;
  console.log(blogs);
  return (
    <Layout>
      <h1>This is our blog page</h1>

      {blogs.map(({ title, publishedData, body, id, slug }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{publishedData}</p>
          {body.content.map(({ content }, i) => (
            <p key={`${id}-${i}`}>{content[0].value}</p>
          ))}
          <Link to={`/blog/${slug}`}>Read more</Link>
          <hr />
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulBlog {
      nodes {
        title
        publishDate
        id
        slug
        body {
          content {
            content {
              value
            }
          }
        }
      }
    }
  }
`;

export default blog;
