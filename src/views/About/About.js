import React from 'react';
import styled from 'styled-components';
import PersonAbout from 'components/molecules/PersonAbout/PersonAbout';
import { aboutInfo } from 'data/about';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledLevel1 = styled.ul`
  width: 80vw;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const StyledLevel2 = styled.ul`
  width: 80vw;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
`;

const About = () => (
  <StyledWrapper>
    <StyledLevel1>
      <PersonAbout
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
