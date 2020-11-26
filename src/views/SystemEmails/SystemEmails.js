import React from 'react';
import styled from 'styled-components';
import DrawerLeft from 'components/organisms/DrawerLeft/DrawerLeft';
import MailInputs from 'components/molecules/MailInputs/MailInputs';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SystemEmails = () => (
  <StyledWrapper>
    <DrawerLeft />
    <MailInputs />
  </StyledWrapper>
);

export default SystemEmails;
