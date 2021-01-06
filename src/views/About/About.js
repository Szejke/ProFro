import React from 'react';
import styled from 'styled-components/macro';
import PersonAbout from 'components/molecules/PersonAbout/PersonAbout';
import { aboutInfo } from 'data/about';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLevel1 = styled.ul`
  display: flex;
  justify-content: center;
`;

const StyledLevel2 = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const About = () => (
  <StyledWrapper>
    <StyledLevel1>
      <PersonAbout
        unradius
        image={aboutInfo[0].image}
        name={aboutInfo[0].name}
        description={aboutInfo[0].description}
        link={aboutInfo[0].link}
      />
    </StyledLevel1>

    <StyledLevel2>
      {aboutInfo.slice(1).map((item) => (
        <PersonAbout
          key={item.name}
          name={item.name}
          image={item.image}
          description={item.description}
          link={item.link}
        />
      ))}
    </StyledLevel2>
  </StyledWrapper>
);

export default About;
