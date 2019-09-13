import React from 'react';
import { Link } from '../Link';
import styled from '@emotion/styled';
import { colors, mq } from 'theme';

const Nav = styled.nav({
  padding: 0,
  margin: 0,
});

const NavList = styled.ul({
  display: 'flex',
  flex: 1,
  listStyle: 'none',
  [mq.mobile]: {
    justifyContent: 'center',
  },
});

const NavItem = styled.li({
  marginRight: '2rem',
  [mq.mobile]: { marginRight: '1rem' },
});

export const Navbar = ({ children }) => (
  <Nav>
    <NavList>
      {React.Children.map(children, (child, index) => (
        <NavItem key={index}>{child}</NavItem>
      ))}
    </NavList>
  </Nav>
);

const NavLink = styled(Link)({
  textDecoration: 'none',
  color: colors.white,
  [mq.mobile]: {
    fontSize: '0.75rem',
  },
});

Navbar.Link = props => (
  <NavLink
    {...props}
    css={
      window.location.pathname === props.to && {
        textDecoration: 'underline',
        textDecorationColor: 'white',
      }
    }
  />
);
