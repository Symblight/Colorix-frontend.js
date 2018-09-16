import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import { Button } from './index'


storiesOf('ui/Atoms/Button', module)
  .addWithJSX('default', () => (
    <Button>Hello</Button>
  ))
  .addWithJSX('reverse', () => (
    <Button reverse>Hello</Button>
  ))
  .addWithJSX('another palette', () => (
    <Button palette="secondary">Hello</Button>
  ))
  .addWithJSX('disabled', () => (
    <Button disabled>Hello</Button>
  ))
  .addWithJSX('transparent', () => (
    <Button transparent>Hello</Button>
  ))
  .addWithJSX('height', () => (
    <Button height={100}>Hello</Button>
  ))
  .addWithJSX('link', () => (
    <Button href="https://github.com/symblight">symblight repository</Button>
  ))
