import React from 'react';
import styled from 'styled-components/macro';
import IButton from 'components/atoms/IconButton/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 50px;
  z-index: 100;
  height: 91vh;
  background-color: #ffffff40;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 100px rgb(0 0 0 / 25%);
  &:hover {
    width: 200px;
  }
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
`;

const StyledButton = styled(IButton)`
  position: absolute;
`;

const LeftSidebar = () => (
  <StyledWrapper>
    <StyledLink>
      <Link to="/system-emails">
        <StyledButton paragraf="Mail" />
      </Link>
      <Link to="/setting-emails">
        <StyledButton paragraf="Settings - Mail" icon={SettingsIcon} />
      </Link>
    </StyledLink>
  </StyledWrapper>
);

export default LeftSidebar;
