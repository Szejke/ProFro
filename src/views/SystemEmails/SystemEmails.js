import React from 'react';
import styled from 'styled-components';
import MailInputs from 'components/organisms/MailInputs/MailInputs';
import LeftSidebar from 'components/organisms/LeftSidebar/LeftSidebar';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  min-width: 50%;
`;

const SystemEmails = () => (
  <StyledWrapper>
    <LeftSidebar />
    <StyledContent>
      <MailInputs />
    </StyledContent>
  </StyledWrapper>
);

export default SystemEmails;
