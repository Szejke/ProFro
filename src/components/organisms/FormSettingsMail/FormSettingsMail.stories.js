import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import FormSettingsMail from './FormSettingsMail';

storiesOf('organisms/FormSettingsMail', module)
  .addDecorator(withKnobs)
  .add('FormSettingsMail', () => {
    return <FormSettingsMail />;
  });
