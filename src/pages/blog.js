import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const blog = ({ data }) => {
  const {
    site: {
      info: { blogs },
    },
  } = data;

  return (
    <Layout>
      <h1>This is our blog page</h1>
      {blogs.map(({ title, text }) => (
        <>
          <h2>{title}</h2>
          <p>{text}</p>
        </>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      info: siteMetadata {
        blogs {
          title
          text
        }
      }
    }
  }
`;

export default blog;
