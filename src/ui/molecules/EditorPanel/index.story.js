import React from 'react'
import { storiesOf } from '@storybook/react'

import { PanelEditor } from '.'


storiesOf('ui/Molecules/PanelEditor', module)
  .addWithJSX('default', () => (
    <PanelEditor />
  ))
