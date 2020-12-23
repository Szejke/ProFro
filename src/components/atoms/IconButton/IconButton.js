import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { PhotoCamera } from '@material-ui/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LinkHeader from 'components/atoms/LinkHeader/LinkHeader';

const StyledSvgIcon = styled(SvgIcon)`
  && {
    color: black;
  }
`;

const StyledWrapper = styled.div``;

const StyledParagraf = styled(LinkHeader)`
  && {
    min-width: 150px;
  }
`;

const IButton = ({ paragraf, icon }) => (
  <StyledWrapper>
    <IconButton>
      <StyledSvgIcon fontSize="large" component={icon} />
      {paragraf ? <StyledParagraf>{paragraf}</StyledParagraf> : 'ysk'}
    </IconButton>
  </StyledWrapper>
);

IButton.propTypes = {
  paragraf: PropTypes.string,
  icon: PropTypes.element,
};

IButton.defaultProps = {
  paragraf: false,
  icon: PhotoCamera,
};

export default IButton;
