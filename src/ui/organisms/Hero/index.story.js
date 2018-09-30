import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { Hero } from '.'


storiesOf('ui/Organisms/Hero', module)
  .addDecorator(StoryRouter())
  .addWithJSX('default', () => (
    <Hero />
  ))
