import React, { Component } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import { MainPage } from '../components/pages/Main'
import { PalettesPage } from '../components/pages/Palettes'
import { NotFoundPage } from '../components/pages/NotFound'


export class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/palettes" component={PalettesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
