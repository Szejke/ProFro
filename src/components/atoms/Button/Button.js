import styled from 'styled-components';
import ButtonMaterial from '@material-ui/core/Button';

const Button = styled(ButtonMaterial)`
  && {
    color: white;
    padding: 0;
    background-color: ${({ theme }) => theme.colorPrimary};
    width: 220px;
    height: 47px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colorTertiary};
    }
  }
`;

export default Button;
