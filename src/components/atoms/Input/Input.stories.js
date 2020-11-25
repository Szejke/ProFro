import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('atoms/Input', module)
  .addDecorator(withKnobs)
  .add('Input', () => {
    return <Input />;
  });
