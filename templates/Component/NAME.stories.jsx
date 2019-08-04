import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import NAME from './NAME'

const stories = storiesOf('NAME', module);
stories.addDecorator(withKnobs);

stories.add('Example 1', () =>
  <NAME />
)