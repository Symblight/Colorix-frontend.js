import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from './index'


storiesOf('ui/atoms', module)
  .addWithJSX('Input', () => (
    <Input onClick={action('default')} />
  ))
