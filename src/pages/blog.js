import React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

const blog = ({ data }) => {
  const {
    allContentfulBlog: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <h1>This is our blog page</h1>

      {blogs.map(({ title, publishedData, body, id, seoUrl }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{publishedData}</p>
          <p>
            {body &&
              body.content &&
              body.content.length &&
              body.content[0].content[0].value}
          </p>
          <Link to={`/blog/${seoUrl}`}>Read more</Link>
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
        seoUrl
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
