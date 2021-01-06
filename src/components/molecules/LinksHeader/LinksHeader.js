import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import LinkHeader from 'components/atoms/LinkHeader/LinkHeader';

const StyledWrapper = styled.div`
  display: flex;
`;

const LinksHeader = () => (
  <StyledWrapper>
    <LinkHeader as={Link} to="/">
      Home
    </LinkHeader>
    <LinkHeader as={Link} to="/Employees">
      Employees
    </LinkHeader>
    <LinkHeader as={Link} to="/system-emails">
      System Emails
    </LinkHeader>
    <LinkHeader as={Link} to="/about">
      About
    </LinkHeader>
  </StyledWrapper>
);

export default LinksHeader;
