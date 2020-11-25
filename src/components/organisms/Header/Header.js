import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'components/atoms/Logo/Logo';
import LinksHeader from 'components/molecules/LinksHeader/LinksHeader';
import LogoImage from 'assets/Logo.png';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0;
  height: 80px;
  background: white;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 10px rgba(36, 36, 36, 0.09);
  margin-bottom: 20px;
`;

const StyledLogo = styled.div``;

const StyledLinksHeader = styled.div`
  margin-left: auto;
  margin-right: 4%;
`;

const Header = () => (
  <StyledWrapper>
    <StyledLogo>
      <Link to="/">
        <Logo src={LogoImage} />
      </Link>
    </StyledLogo>
    <StyledLinksHeader>
      <LinksHeader />
    </StyledLinksHeader>
  </StyledWrapper>
);

export default Header;
