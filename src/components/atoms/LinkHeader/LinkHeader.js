import styled from 'styled-components/macro';

const LinkHeader = styled.a`
  display: block;
  position: relative;
  padding: 10px 15px;
  color: #0683f9;
  font-family: 'Montserrat', sans-serif;
  font-weight: 550;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: hsl(212, 100%, 96%);
  }
`;

export default LinkHeader;
