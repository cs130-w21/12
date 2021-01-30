import './App.css'
import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import LoginCallback from '@okta/okta-react'
const Main = lazy(() => import('./pages/Main'))
const Profile = lazy(() => import('./pages/Profile'))

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Route exact path="/" component={Main} />
        <Route path="/login/callback" component={LoginCallback} />
        <Route path="/profile" component={Profile} />
      </Suspense>
    </React.Fragment>
  )
}

export default App
