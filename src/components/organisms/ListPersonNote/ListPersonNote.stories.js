import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import ListPersonNote from './ListPersonNote';

storiesOf('organisms/ListPersonNote', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('ListPersonNote', () => {
    return <ListPersonNote />;
  });
