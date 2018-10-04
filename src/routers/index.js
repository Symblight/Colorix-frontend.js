import React, { Component } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Loadable from 'react-loadable'

import { Loading } from '../components/loading'


const LoadablMainPage = Loadable({
  loader: () => import(/* webpackChunkName:'PalettesPage' */ '../components/pages/Main').then(({ MainPage }) => MainPage),
  loading: Loading,
  delay: 3000,
})

const LoadableLoginPage = Loadable({
  loader: () => import(/* webpackChunkName:'PalettesPage' */ '../components/pages/Login').then(({ LoginPage }) => LoginPage),
  loading: Loading,
  delay: 3000,
})

const LoadableSignUpPage = Loadable({
  loader: () => import(/* webpackChunkName:'PalettesPage' */ '../components/pages/SignUp').then(({ SignUpPage }) => SignUpPage),
  loading: Loading,
  delay: 3000,
})

const LoadablPalettesPage = Loadable({
  loader: () => import(/* webpackChunkName:'PalettesPage' */ '../components/pages/Palettes').then(({ PalettesPage }) => PalettesPage),
  loading: Loading,
  delay: 300,
})

const LoadableEditorPage = Loadable({
  loader: () => import(/* webpackChunkName:'EditorPage' */ '../components/pages/Editor').then(({ EditorPage }) => EditorPage),
  loading: Loading,
  delay: 2000,
})

const LoadableNoMutch = Loadable({
  loader: () => import(/* webpackChunkName:'NotFoundPage' */ '../components/pages/NotFound').then(({ NotFoundPage }) => NotFoundPage),
  loading: Loading,
})

export class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoadablMainPage} />
        <Route path="/palettes" component={LoadablPalettesPage} />
        <Route path="/login" component={LoadableLoginPage} />
        <Route path="/signup" component={LoadableSignUpPage} />
        <Route path="/editor" component={LoadableEditorPage} />
        <Route component={LoadableNoMutch} />
      </Switch>
    )
  }
}
