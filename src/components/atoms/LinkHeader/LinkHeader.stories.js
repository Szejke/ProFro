import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import LinkHeader from './LinkHeader';

storiesOf('atoms/LinkHeader', module)
  .addDecorator(withKnobs)
  .add('LinkHeader', () => {
    const label = 'Your Name';
    const defaultValue = 'James';
    const groupId = 'GROUP-ID1';
    const value = text(label, defaultValue, groupId);
    return <LinkHeader>{value}</LinkHeader>;
  });
