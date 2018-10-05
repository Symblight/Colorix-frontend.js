import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { MainRouter as Routers } from './routers'
import { globalStyles, theme } from './ui/theme'
import Theme from './ui/themes/default'


injectGlobal`${globalStyles}`

const rootElement = document.getElementById('root')

const render = (Component) => ReactDOM.render(
  <AppContainer>
    <ThemeProvider theme={Theme}>
      <Router>
        <Component />
      </Router>
    </ThemeProvider>
  </AppContainer>,
  rootElement,
)

render(Routers)

if (module.hot) module.hot.accept('./routers', () => render(Routers))
