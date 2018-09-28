import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import { AppContainer } from 'react-hot-loader'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { MainRouter as Routers } from './routers'
import { globalStyles } from './ui/theme'


injectGlobal`${globalStyles}`

const rootElement = document.getElementById('root')

const render = (Component) => ReactDOM.render(
  <AppContainer>
    <Router>
      <React.Fragment>
        <Helmet
          titleTemplate="%s • Colorix"
        />
        <Component />
      </React.Fragment>
    </Router>
  </AppContainer>,
  rootElement,
)

render(Routers)

if (module.hot) module.hot.accept('./routers', () => render(Routers))
