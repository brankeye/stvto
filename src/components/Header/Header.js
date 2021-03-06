import React from 'react';
import { Link, Navbar, Typography, Anchor, Content } from 'components';
import { colors, mq } from 'theme';
import crestImage from 'images/crest.png';

export const Header = ({ siteTitle, children }) => (
  <header>
    <Content css={{ backgroundColor: colors.black }}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Anchor href={'mailto:brandon@stvto.com'}>
          <Typography type={'body'} color={'white'}>
            contact: brandon@stvto.com
          </Typography>
        </Anchor>
      </div>
    </Content>
    <Content css={{ backgroundColor: colors.red }}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '1rem 0',
          [mq.mobile]: {
            justifyContent: 'center',
          },
        }}
      >
        <img src={crestImage} alt="crest" width={100} height={100} />
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
      <Navbar>
        <Navbar.Link to={'/'}>Our School</Navbar.Link>
        <Navbar.Link to={'/classes'}>Classes</Navbar.Link>
        <Navbar.Link to={'/faq'}>FAQ</Navbar.Link>
        <Navbar.Link to={'/system'}>System</Navbar.Link>
        <Navbar.Link to={'/family'}>Family</Navbar.Link>
      </Navbar>
    </Content>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};
