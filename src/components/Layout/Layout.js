/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Header, Navbar, Typography } from 'components';
import styled from '@emotion/styled';
import { font, mq } from 'theme';
import 'sanitize.css';

const Container = styled.div({
  margin: '0 auto',
  padding: '1.45rem 1.0875rem',
  width: '60%',
  [mq.mobile]: {
    width: '100%',
  },
});

const Footer = styled.footer({
  paddingTop: '2rem',
});

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}>
          <Navbar>
            <Navbar.Link to={'/'}>Home</Navbar.Link>
            <Navbar.Link to={'/our-school'}>Our School</Navbar.Link>
            <Navbar.Link to={'/classes'}>Classes</Navbar.Link>
            <Navbar.Link to={'/faq'}>FAQ</Navbar.Link>
            <Navbar.Link to={'/system'}>System</Navbar.Link>
            <Navbar.Link to={'/family'}>Family</Navbar.Link>
          </Navbar>
        </Header>
        <Container>
          <main>{children}</main>
          <Footer>
            <Typography type={'body'}>
              © {new Date().getFullYear()} Sunny Tang Ving Tsun Orleans
            </Typography>
          </Footer>
        </Container>
      </>
    )}
  />
);
