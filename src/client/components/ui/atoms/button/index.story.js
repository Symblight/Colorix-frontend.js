import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import { Button } from './index'


storiesOf('ui/atoms', module)
  .addWithJSX('Button', () => (
    <Button onClick={action('default')} wide={boolean('Wide', false)}>{text('Children', 'Example content')}</Button>
  ))
