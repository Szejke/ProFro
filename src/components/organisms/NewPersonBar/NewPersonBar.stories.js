import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import NewPersonBar from './NewPersonBar';

storiesOf('organisms/NewPersonBar', module)
  .addDecorator(withKnobs)
  .add('NewPersonBar', () => {
    return <NewPersonBar />;
  });
