import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import capNAME from './capNAME'

const stories = storiesOf('capNAME', module);
stories.addDecorator(withKnobs);

stories.add('Example 1', () =>
  <capNAME />
)