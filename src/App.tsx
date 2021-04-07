import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RepositoriesScreen } from 'src/screens'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'rdx/index'

export const App: React.FC<{}> = () => (
  <ReduxProvider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={RepositoriesScreen} />
      </Switch>
    </Router>
  </ReduxProvider>
)
