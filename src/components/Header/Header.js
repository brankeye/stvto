import React from 'react';
import { Link, Typography, Image } from 'components';
import { colors } from 'theme';
import styled from '@emotion/styled';

const StyledHeader = styled.header({
  background: colors.red,
  marginBottom: `1.45rem`,
});

export const Header = ({ siteTitle, children }) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        minWidth: 600,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Image name={'crest'} />
        <Typography
          type={'title'}
          style={{ marginLeft: '1.5rem', letterSpacing: '0.2rem' }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </div>

      {children}
    </div>
  </StyledHeader>
);

Header.defaultProps = {
  siteTitle: ``,
};
