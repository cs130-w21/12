import './App.css'
import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
const Main = lazy(() => import('./pages/Main'))
const LoginCallback = lazy(() => import('@okta/okta-react'))

const App = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <Suspense fallback={<p>Loading...</p>}>
        <Route exact path="/" component={Main} />
        <Route path="/login/callback" component={LoginCallback} />
      </Suspense>
    </React.Fragment>
  )
}

export default App
