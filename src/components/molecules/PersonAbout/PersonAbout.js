import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AwatarPerson from 'components/atoms/AwatarPerson/AwatarPerson';

const StyledWrapper = styled.div`
  display: flex;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  padding: 2%;
  max-width: 70rem;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledParagraphs = styled.div`
  margin-left: 30px;
`;

const PersonAbout = ({ name, image, description, link }) => (
  <StyledWrapper>
    <AwatarPerson alt={name} src={image} />
    <StyledParagraphs>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link}>Visit Page</a>
    </StyledParagraphs>
  </StyledWrapper>
);

PersonAbout.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

PersonAbout.defaultProps = {
  description: '',
};

export default PersonAbout;
