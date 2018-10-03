import React from 'react'
import { storiesOf } from '@storybook/react'

import { Logo } from '.'


storiesOf('ui/Molecules/Logo', module)
  .addWithJSX('default', () => (
    <Logo />
  ))
