import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

const Header = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(getSiteData);

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Header;
