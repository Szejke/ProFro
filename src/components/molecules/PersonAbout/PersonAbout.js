import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import AwatarPerson from 'components/atoms/AwatarPerson/AwatarPerson';

const StyledWrapper = styled.div`
  display: flex;

  box-shadow: 0px -2px 53px -6px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  border-radius: 10px;
  padding: 2%;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const StyledParagraphs = styled.div`
  margin-left: 30px;
  text-decoration: none;
`;
const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colorPrimary};
`;
const StyledA = styled.a`
  text-decoration: none;
`;

const PersonAbout = ({ name, image, description, link, unradius }) => (
  <StyledWrapper>
    {unradius ? (
      <AwatarPerson alt={name} src={image} />
    ) : (
      <AwatarPerson unradius alt={name} src={image} />
    )}
    <StyledParagraphs>
      <StyledH2>{name}</StyledH2>
      <p>{description}</p>
      <StyledA href={link}>Visit Page</StyledA>
    </StyledParagraphs>
  </StyledWrapper>
);

PersonAbout.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  unradius: PropTypes.string,
};

PersonAbout.defaultProps = {
  unradius: null,
  description: '',
};

export default PersonAbout;
