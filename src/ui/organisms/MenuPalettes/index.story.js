import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { MenuPalettes } from '.'


storiesOf('ui/Organisms/MenuPalettes', module)
  .addDecorator(StoryRouter())
  .addWithJSX('default', () => (
    <MenuPalettes />
  ))
