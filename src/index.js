import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './main/App'
import Learn from './learn/Learn'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/learn" component={Learn} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
