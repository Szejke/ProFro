import React from 'react';
import styled from 'styled-components';
import FormSettingsMail from 'components/organisms/FormSettingsMail/FormSettingsMail';

const StyledWrapper = styled.div`
  display: flex;
  padding: 5rem;
`;

const SystemEmails = () => (
  <StyledWrapper>
    <FormSettingsMail />
  </StyledWrapper>
);

export default SystemEmails;
