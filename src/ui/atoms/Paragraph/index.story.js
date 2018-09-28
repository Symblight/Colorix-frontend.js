import React from 'react'
import { storiesOf } from '@storybook/react'

import { Paragraph } from '.'


storiesOf('ui/Atoms/Paragraph', module)
  .addWithJSX('default', () => (
    <Paragraph>
        Hi! Just finished the interior of Zooey's and Gus' house for #santria and I will start with some preparation based on the 
        poll for next week! Please enjoy my fondly
        </Paragraph>
  ))
