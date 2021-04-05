import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const MockScreen: React.FC<{}> = () => {
  return <p>Page title</p>
}

export const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MockScreen} />
    </Switch>
  </Router>
)
