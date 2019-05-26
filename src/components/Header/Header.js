import { Link } from 'gatsby';
import React from 'react';
import { colors } from 'theme';
import styled from '@emotion/styled';

const StyledHeader = styled.header({
  background: colors.red,
  marginBottom: `1.45rem`,
});

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

Header.defaultProps = {
  siteTitle: ``,
};
