import React from 'react';
import { storiesOf } from '@storybook/react';
import IButton from './IconButton';

storiesOf('atoms/Button', module).add('Icon Button', () => {
  return <IButton>Primary</IButton>;
});
