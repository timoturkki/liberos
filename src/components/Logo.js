import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const getImage = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Logo = () => {
  const { file } = useStaticQuery(getImage);

  console.log(file);
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Img fluid={file.childImageSharp.fluid} />
    </div>
  );
};

export default Logo;
