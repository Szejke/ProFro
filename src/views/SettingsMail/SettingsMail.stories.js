import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import SettingsMail from './SettingsMail';

storiesOf('views/SettingsMail', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('SettingsMail', () => {
    return <SettingsMail />;
  });
