import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Workers from './Workers';

storiesOf('views/Workers', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Workers', () => {
    return <Workers />;
  });
