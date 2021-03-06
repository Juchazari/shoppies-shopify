import React from 'react'
import styled from 'styled-components';
import Container from './Container';
import Logo from './Logo';

const Nav = styled.nav`
  width: 100%;
  padding: 16px 0;
  background-color: #0e0e10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

function Navbar() {
  return (
    <Nav>
      <Container>
        <Logo />
      </Container>
    </Nav>
  );
}

export default Navbar;