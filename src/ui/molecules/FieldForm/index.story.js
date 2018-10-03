import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { FieldForm } from '.'


storiesOf('ui/Molecules/FieldForm', module)
  .addWithJSX('default', () => (
    <FieldForm onChange={action('default')} label="default" />
  ))

  .addWithJSX('error', () => (
    <FieldForm onChange={action('default')} error label="error" />
  ))
