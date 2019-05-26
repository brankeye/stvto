import React from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav({
  padding: 0,
  margin: 0,
});

const NavList = styled.ul({ display: 'flex', flex: 1, listStyle: 'none' });

const NavItem = styled.li({ marginRight: 10 });

export const Navbar = ({ children }) => (
  <Nav>
    <NavList>
      {React.Children.map(children, (child, index) => (
        <NavItem key={index}>{child}</NavItem>
      ))}
    </NavList>
  </Nav>
);
