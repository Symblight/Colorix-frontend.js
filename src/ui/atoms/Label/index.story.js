import React from 'react'
import { storiesOf } from '@storybook/react'

import { Label } from './index'


storiesOf('ui/Atoms/Label', module)
  .addWithJSX('default', () => (
    <Label>Hello</Label>
  ))
  .addWithJSX('reverse', () => (
    <Label reverse>Hello</Label>
  ))
