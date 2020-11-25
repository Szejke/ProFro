import styled from 'styled-components';

const LinkHeader = styled.a`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.colorTextSecondary};
  padding: 10px 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorTertiary};
  }
`;

export default LinkHeader;
