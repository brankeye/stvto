/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Header } from '../Header';
import { Navbar } from '../Navbar';
import './Layout.css';

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Navbar>
            <Link to={'/'}>Home</Link>
            <Link to={'/our-school'}>Our School</Link>
          </Navbar>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} Sunny Tang Ving Tsun Orleans
          </footer>
        </div>
      </>
    )}
  />
);
