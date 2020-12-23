import React from 'react';
import styled from 'styled-components';
import FormSettingsMail from 'components/organisms/FormSettingsMail/FormSettingsMail';
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
      <FormSettingsMail />
    </StyledContent>
  </StyledWrapper>
);

export default SystemEmails;
