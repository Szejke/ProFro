import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import LeftSidebar from './LeftSidebar';

storiesOf('organisms/LeftSidebar', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('LeftSidebar', () => {
    return <LeftSidebar />;
  });
