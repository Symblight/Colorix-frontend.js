import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link } from '.'


storiesOf('ui/Atoms/Link', module)
  .addWithJSX('default', () => (
    <Link href="https://github.com/symblight">symblight repository</Link>
  ))
  .addWithJSX('reverse', () => (
    <Link href="https://github.com/symblight" reverse>symblight repository</Link>
  ))
  .addWithJSX('another palette', () => (
    <Link href="https://github.com/symblight" palette="secondary">symblight repository</Link>
  ))
