import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import User from './User'

const stories = storiesOf('User', module);
stories.addDecorator(withKnobs);

stories.add('Example 1', () =>
  <User />
)