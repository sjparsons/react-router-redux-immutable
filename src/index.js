/* External dependencies */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

/* Internal dependencies */
import {store, history} from './redux-router-init.js'
import {App, Home, About, Subpage} from './containers'

//////////////////////////////////////////////////

const root = document.createElement('div')
document.body.appendChild(root)

// A router with enhanced history nested in an immutable, location-aware
// redux state provider
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About}/>
        <Route path="subpage" component={Subpage}/>
      </Route>
    </Router>
  </Provider>,
  root
)
