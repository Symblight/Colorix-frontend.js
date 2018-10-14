import React from 'react'
import { storiesOf } from '@storybook/react'

import { ButtonLike } from '.'


storiesOf('ui/Molecules/ButtonLike', module)
  .addWithJSX('default', () => (
    <ButtonLike>200</ButtonLike>
  ))
