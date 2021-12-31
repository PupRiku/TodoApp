import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  padding: 1rem;
  color: var(--color-whiteColor);
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
`;

const Logo = () => {
  return <LogoWrapper>Productivity</LogoWrapper>;
};

export default Logo;
