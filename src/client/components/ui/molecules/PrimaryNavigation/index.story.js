import React from 'react'
import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react'

import { PrimaryNavigation } from '.'


storiesOf('ui/Molecules/PrimaryNavigation', module)
  .addDecorator(StoryRouter())
  .addWithJSX('default', () => (
    <PrimaryNavigation />
  ))
  .addWithJSX('reverse', () => (
    <PrimaryNavigation reverse />
  ))
