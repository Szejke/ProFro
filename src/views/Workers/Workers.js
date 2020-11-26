import React from 'react';
import styled from 'styled-components';
import DrawerLeft from 'components/organisms/DrawerLeft/DrawerLeft';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Workers = () => (
  <StyledWrapper>
    <DrawerLeft />
  </StyledWrapper>
);

export default Workers;
