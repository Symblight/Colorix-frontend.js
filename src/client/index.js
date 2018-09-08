import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet'
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components'

import App from './App';

injectGlobal`
  *{
    margin: 0;
    padding: 0;
  }
`;

const rootElement = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <React.Fragment>
          <Helmet
            titleTemplate="%s • Colorix"
          />
        <Component />
      </React.Fragment>
    </AppContainer>,
    rootElement
);

render(App);

if (module.hot) module.hot.accept('./App', () => render(App));