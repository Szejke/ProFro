import styled, { css } from 'styled-components/macro';

const AwatarPerson = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  ${({ unradius }) =>
    unradius &&
    css`
      border-radius: 0;
    `}
`;

export default AwatarPerson;
