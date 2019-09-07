import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { colors, mq } from 'theme';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const CrestImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "crest.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div css={{ width: 100, [mq.mobile]: { width: 50 } }}>
        <Img
          fluid={data.image.childImageSharp.fluid}
          fadeIn={false}
          backgroundColor={colors.red}
        />
      </div>
    )}
  />
);
