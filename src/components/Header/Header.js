import React from 'react';
import { Link, Typography, CrestImage } from 'components';
import { colors, mq } from 'theme';
import styled from '@emotion/styled';

const Container = styled.header({
  background: colors.red,
  marginBottom: `1.45rem`,
});

export const Header = ({ siteTitle, children }) => (
  <header>
    <Container>
      <div
        css={{
          margin: '0 auto',
          width: '60%',
          padding: '1.45rem 1.0875rem',
          [mq.mobile]: {
            margin: 0,
            width: '100%',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            [mq.mobile]: {
              justifyContent: 'center',
            },
          }}
        >
          <CrestImage />
          <div>
            <Typography
              type={'title'}
              css={{
                margin: 0,
                [mq.desktop]: {
                  marginLeft: '2rem',
                  letterSpacing: '0.2rem',
                },
                [mq.mobile]: {
                  marginLeft: '1rem',
                },
              }}
            >
              <Link
                to="/"
                css={{
                  color: '#FFFFFF',
                  textDecoration: `none`,
                  textAlign: 'center',
                }}
              >
                {siteTitle}
              </Link>
            </Typography>
            <Typography
              type={'subtitle'}
              css={{
                margin: 0,
                marginLeft: '2rem',
                color: 'rgba(255, 255, 255, 0.90)',
                fontSize: '1rem',
                [mq.mobile]: {
                  display: 'none',
                },
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
