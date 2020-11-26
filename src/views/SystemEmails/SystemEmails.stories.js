import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import SystemEmails from './SystemEmails';

storiesOf('views/SystemEmails', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('SystemEmails', () => {
    return <SystemEmails />;
  });
