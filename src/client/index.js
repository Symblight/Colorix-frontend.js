import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet'
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routers from './routers';

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
      <Router>
        <React.Fragment>
            <Helmet
              titleTemplate="%s • Colorix"
            />
          <Routers />
        </React.Fragment>
      </Router>
    </AppContainer>,
    rootElement
);

render(Routers);

if (module.hot) module.hot.accept('./routers', () => render(Routers));