import React from 'react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
  },
};

const blogTemplate = ({ data }) => {
  const { contentfulBlog: blog } = data;
  return (
    <Layout>
      <h1>{blog.title}</h1>
      {documentToReactComponents(blog.body.json, options)}
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishDate
      body {
        json
      }
    }
  }
`;

export default blogTemplate;
