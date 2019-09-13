import React from 'react';
import { Link, Navbar, Typography, CrestImage, Anchor } from 'components';
import { colors, mq } from 'theme';
import styled from '@emotion/styled';

export const Header = ({ siteTitle, children }) => (
  <header>
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.black,
        padding: '0 1rem',
      }}
    >
      <div
        css={{
          margin: '0 auto',
          width: '60%',
          [mq.mobile]: {
            margin: 0,
            width: '100%',
          },
        }}
      >
        <Anchor href={'sms:6137095799'}>
          <Typography type={'body'} color={'white'}>
            Text/Call @ 613-709-5799
          </Typography>
        </Anchor>
      </div>
    </div>
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.red,
        padding: '1rem',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 auto',
          width: '60%',
          [mq.mobile]: {
            margin: 0,
            width: '100%',
            justifyContent: 'center',
          },
        }}
      >
        <CrestImage />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
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
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '0 auto',
          width: '60%',
          [mq.mobile]: {
            margin: 0,
            width: '100%',
            justifyContent: 'center',
          },
        }}
      >
        <Navbar>
          <Navbar.Link to={'/'}>Our School</Navbar.Link>
          <Navbar.Link to={'/classes'}>Classes</Navbar.Link>
          <Navbar.Link to={'/faq'}>FAQ</Navbar.Link>
          <Navbar.Link to={'/system'}>System</Navbar.Link>
          <Navbar.Link to={'/family'}>Family</Navbar.Link>
        </Navbar>
      </div>
    </div>
  </header>
);

const styles = {
  center: {},
};

Header.defaultProps = {
  siteTitle: '',
};
