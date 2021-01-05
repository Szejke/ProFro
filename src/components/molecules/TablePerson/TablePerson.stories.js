import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import TablePerson from './TablePerson';

storiesOf('molecules/TablePerson', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('TablePerson', () => {
    return <TablePerson />;
  });
