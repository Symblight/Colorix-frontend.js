import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import { Block } from '.'


storiesOf('ui/Atoms/Block', module)
  .addWithJSX('primary', () => (
    <Block>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .addWithJSX('reverse', () => (
    <Block reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .addWithJSX('palette', () => (
    <Block palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .addWithJSX('palette reverse', () => (
    <Block palette="primary" reverse>


      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .addWithJSX('palette opaque', () => (
    <Block palette="primary" opaque>


      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .addWithJSX('palette opaque reverse', () => (
    <Block palette="primary" opaque reverse>


      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
