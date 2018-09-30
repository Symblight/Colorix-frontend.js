import React from 'react'
import { storiesOf } from '@storybook/react'

import { ParagraphBlock } from '.'


storiesOf('ui/Atoms/Paragraph', module)
  .addWithJSX('default', () => (
    <ParagraphBlock>
        Hi! Just finished the interior of
        Zooeys and Gus house for #santria
        and I will start with some preparation based on the
        poll for next week! Please enjoy my fondly
    </ParagraphBlock>
  ))
  .addWithJSX('reverse', () => (
    <ParagraphBlock reverse>
    Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </ParagraphBlock>
  ))
