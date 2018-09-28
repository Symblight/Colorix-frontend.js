import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { Header } from '.'


storiesOf('ui/Organisms/Header', module)
  .addDecorator(StoryRouter())
  .addWithJSX('default', () => (
    <Header />
  ))
