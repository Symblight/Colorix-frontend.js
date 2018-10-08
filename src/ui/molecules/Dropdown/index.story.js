import React from 'react'
import { storiesOf } from '@storybook/react'

import { Dropdown } from '.'


const ITEMS = [{ id: 0, body: 'item1' }, { id: 1, body: 'item2' }, { id: 2, body: 'item2' }]

storiesOf('ui/Molecules/Dropdown', module)
  .addWithJSX('default', () => (
    <Dropdown title="test" data={ITEMS} />
  ))
