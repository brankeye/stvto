import React from 'react';
import { Link, Typography, CrestImage } from 'components';
import { colors } from 'theme';
import styled from '@emotion/styled';

const Container = styled.header({
  background: colors.red,
  marginBottom: `1.45rem`,
});

export const Header = ({ siteTitle, children }) => (
  <header>
    <Container>
      <div
        style={{
          margin: `0 auto`,
          minWidth: 600,
          maxWidth: 800,
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
          <CrestImage />
          <div>
            <Typography
              type={'title'}
              style={{
                margin: 0,
                marginLeft: '2rem',
                letterSpacing: '0.2rem',
              }}
            >
              <Link
                to="/"
                style={{
                  color: '#FFFFFF',
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </Typography>
            <Typography
              type={'subtitle'}
              style={{
                margin: 0,
                marginLeft: '2rem',
                color: 'rgba(255, 255, 255, 0.90)',
                fontSize: '1rem',
              }}
            >
              Sensitivity, Coordination, Timing, Balance, and Relaxation
            </Typography>
          </div>
        </div>

        {children}
      </div>
    </Container>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};
