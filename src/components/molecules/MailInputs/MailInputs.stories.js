import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import MailInputs from './MailInputs';

storiesOf('molecules/MailInputs', module)
  .addDecorator(withKnobs)
  .add('MailInputs', () => {
    return <MailInputs />;
  });
