import React from 'react';
import styled from 'styled-components/macro';
import MailInputs from 'components/organisms/MailInputs/MailInputs';
import TablePerson from 'components/molecules/TablePerson/TablePerson';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem;
`;
const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
`;

const SystemEmails = () => (
  <StyledWrapper>
    <StyledH1>Mail System</StyledH1>
    <MailInputs />
    <TablePerson />
  </StyledWrapper>
);

export default SystemEmails;
