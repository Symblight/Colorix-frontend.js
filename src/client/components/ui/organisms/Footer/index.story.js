import React from 'react'
import { storiesOf } from '@storybook/react'

import { Footer } from '.'


storiesOf('ui/Organisms/Footer', module)
  .addWithJSX('default', () => (
    <Footer />
  ))
