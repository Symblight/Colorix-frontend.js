import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from '.'


storiesOf('ui/Atoms/Icon', module)
  .addWithJSX('default', () => (
    <Icon icon="close" />
  ))
  .addWithJSX('palette', () => (
    <Icon icon="close" palette="primary" />
  ))
  .addWithJSX('palette reverse', () => (
    <Icon icon="close" palette="primary" reverse />
  ))
  .addWithJSX('height', () => (
    <Icon icon="close" height={100} />
  ))
