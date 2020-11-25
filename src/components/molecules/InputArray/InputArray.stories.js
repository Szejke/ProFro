import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import InputArray from './InputArray';

storiesOf('molecules/InputArray', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('InputArray', () => {
    const id = 'id';
    const label = 'label';
    const [tags, setTags] = useState([]);

    return <InputArray id={id} label={label} tags={tags} setTags={setTags} />;
  });
