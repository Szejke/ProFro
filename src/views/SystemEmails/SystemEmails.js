import React from 'react';
import styled from 'styled-components';
import MailInputs from 'components/organisms/MailInputs/MailInputs';

const StyledWrapper = styled.div`
  display: flex;
  padding: 5rem;
`;

const SystemEmails = () => (
  <StyledWrapper>
    <MailInputs />
  </StyledWrapper>
);

export default SystemEmails;
