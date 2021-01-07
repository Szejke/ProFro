import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { PhotoCamera } from '@material-ui/icons';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import LinkHeader from 'components/atoms/LinkHeader/LinkHeader';

const StyledSvgIcon = styled(SvgIcon)`
  && {
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

const StyledWrapper = styled.div``;

const StyledButton = styled(IconButton)`
  && {
    border-radius: 0%;
  }
`;

const StyledParagraf = styled(LinkHeader)`
  && {
    min-width: 150px;
  }
`;

const IButton = ({ paragraf, icon }) => (
  <StyledWrapper>
    <StyledButton>
      <StyledSvgIcon fontSize="large" component={icon} />
      {paragraf ? <StyledParagraf>{paragraf}</StyledParagraf> : null}
    </StyledButton>
  </StyledWrapper>
);

IButton.propTypes = {
  paragraf: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object]),
};

IButton.defaultProps = {
  paragraf: false,
  icon: PhotoCamera,
};

export default IButton;
