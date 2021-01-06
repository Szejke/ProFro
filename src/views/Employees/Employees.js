import React from 'react';
import styled from 'styled-components/macro';
import TablePerson from 'components/molecules/TablePerson/TablePerson';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Employees = () => (
  <StyledWrapper>
    <TablePerson />
  </StyledWrapper>
);

export default Employees;
