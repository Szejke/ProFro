import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Employees from './Employees';

storiesOf('views/Employees', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Employees', () => {
    return <Employees />;
  });
