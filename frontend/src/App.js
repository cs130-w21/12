import './App.css'
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginCallback } from '@okta/okta-react'
import AppHeader from './components/AppHeader'
const Main = lazy(() => import('./pages/Main'))
const Profile = lazy(() => import('./pages/Profile'))

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default App
