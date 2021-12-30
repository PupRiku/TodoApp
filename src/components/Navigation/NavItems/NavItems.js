import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItems = () => {
  return (
    <Nav>
      <Ul>
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
        <NavItem>Item 3</NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
