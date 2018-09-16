import React, { Component } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import importedComponent from 'react-imported-component'

import { MainPage } from '../components/pages/Main'
import { Loading } from '../components/loading'


const AsyncPalettesPage = importedComponent(
  () => import(/* webpackChunkName:'PalettesPage' */ '../components/pages/Palettes').then(({ PalettesPage }) => PalettesPage),
  {
    LoadingComponent: Loading,
  },
)

const AsyncNoMutch = importedComponent(
  () => import(/* webpackChunkName:'NotFoundPage' */ '../components/pages/NotFound').then(({ NotFoundPage }) => NotFoundPage),
  {
    LoadingComponent: Loading,
  },
)

export class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/palettes" component={AsyncPalettesPage} />
        <Route component={AsyncNoMutch} />
      </Switch>
    )
  }
}
