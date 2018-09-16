import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from './index'


storiesOf('ui/Atoms/Input', module)
  .addWithJSX('default', () => (
    <Input onClick={action('default')} />
  ))
