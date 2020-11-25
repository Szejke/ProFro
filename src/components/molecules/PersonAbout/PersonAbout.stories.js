import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { aboutInfo } from 'data/about';

import PersonAbout from './PersonAbout';

storiesOf('molecules/PersonAbout', module)
  .addDecorator(withKnobs)
  .add('PersonAbout', () => {
    return (
      <PersonAbout
        name="item.name"
        image={aboutInfo[0].image}
        description="item.description"
        link="item.link"
      />
    );
  });
