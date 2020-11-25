import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import About from './About';

storiesOf('views/About', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('About', () => {
    return <About />;
  });
