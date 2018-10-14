import React from 'react'
import { storiesOf } from '@storybook/react'

import { Palette } from '.'


storiesOf('ui/Molecules/Palette', module)
  .addWithJSX('default', () => (
    <Palette />
  ))
