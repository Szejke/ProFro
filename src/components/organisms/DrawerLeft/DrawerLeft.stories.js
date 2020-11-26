import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import DrawerLeft from './DrawerLeft';

storiesOf('organisms/DrawerLeft', module)
  .addDecorator(withKnobs)
  .add('DrawerLeft', () => {
    return <DrawerLeft />;
  });
