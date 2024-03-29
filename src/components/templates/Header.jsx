import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Nav>
        <Link to="">Home</Link>
        <Link to="form">Field Builder</Link>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  position: relative;
  z-index: 2;
  font-size: 25px;
  color: #191919;
  font-family: "Work Sans";
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  margin: 4px 7px;
  color: #191919;
  font-weight: 400;
  &.active {
    font-weight: 900;
    border-radius: 4px;
  }
`;

export default Header;
