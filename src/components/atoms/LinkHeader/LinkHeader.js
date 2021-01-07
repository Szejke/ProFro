import styled from 'styled-components/macro';

const LinkHeader = styled.span`
  display: block;
  position: relative;
  padding: 10px 15px;
  color: #0683f9;
  font-family: 'Montserrat', sans-serif;
  font-weight: 550;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: hsl(0deg 0% 41%);
  }
`;

export default LinkHeader;
