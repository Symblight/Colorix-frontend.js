import React from 'react'
import { storiesOf } from '@storybook/react'

import { Colour } from '.'


storiesOf('ui/Molecules/Colour', module)
  .addWithJSX('default', () => (
    <Colour />
  ))
  .addWithJSX('blue', () => (
    <Colour color="#3498db" title="PETER RIVER" />
  ))
