import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import DropZoneFiles from './DropZoneFiles';

storiesOf('molecules/DropZoneFiles', module)
  .addDecorator(withKnobs)
  .add('DropZoneFiles', () => {
    return <DropZoneFiles />;
  });
