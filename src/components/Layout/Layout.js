/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import 'sanitize.css';

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Header, Typography } from 'components';
import styled from '@emotion/styled';
import { font, mq } from 'theme';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Main = styled.main({
  margin: '0 auto',
  padding: '0 1.0875rem',
  width: '60%',
  [mq.mobile]: {
    width: '100%',
  },
});

const Footer = styled.footer({
  padding: '2rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer>
          <Typography type={'body'}>
            © {new Date().getFullYear()} Sunny Tang Ving Tsun Orleans
          </Typography>
        </Footer>
      </>
    )}
  />
);
