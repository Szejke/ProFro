import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Table from './table';

storiesOf('molecules/Table', module)
  .addDecorator(withKnobs)
  .add('LinksHeader', () => {
    return <Table />;
  });
