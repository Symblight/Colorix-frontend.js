import React from 'react'
import { storiesOf } from '@storybook/react'

import { DropdownItem } from '.'


storiesOf('ui/Atoms/DropdownItem', module)
  .addWithJSX('default', () => (
    <DropdownItem>Hello</DropdownItem>
  ))
