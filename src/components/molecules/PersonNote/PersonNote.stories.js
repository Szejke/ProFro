import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import PersonNote from './PersonNote';

storiesOf('molecules/PersonNote', module)
  .addDecorator(withKnobs)
  .add('PersonNote', () => {
    const labelTitle = 'labelTitle';
    const labelMail = 'labelMail';
    const labelPositonJob = 'labelPositonJob';

    const defaultValueTitle = 'defaultValueTitle';
    const defaultValueMail = 'defaultValueMail';
    const defaultValuePositonJob = 'defaultValuePositonJob';
    const groupId = 'GROUP-ID1';

    const titleValue = text(labelTitle, defaultValueTitle, groupId);
    const mailValue = text(labelMail, defaultValueMail, groupId);
    const positionJobValue = text(labelPositonJob, defaultValuePositonJob, groupId);

    const labelrelationWords = 'relationWordsValue';
    const defaultValuerelationWords = ['Red'];

    const relationWordsValue = array(labelrelationWords, defaultValuerelationWords, groupId);

    return (
      <PersonNote
        id={1}
        title={titleValue}
        mail={mailValue}
        positionJob={positionJobValue}
        relationWords={[relationWordsValue]}
      />
    );
  });
