import './App.css'
import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import logo from './assets/logo.png'

import AppHeader from './components/AppHeader'
const Main = lazy(() => import('./pages/Main'))
const LoginCallback = lazy(() => import('@okta/okta-react'))

const App = () => (
  <React.Fragment>
    <AppHeader />
      <div
        className="container-fluid"
        style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}
      >
      <img src={logo} alt="Logo" width="140" height="140" />
      <Suspense fallback={<p>Loading...</p>}>
        <Route exact path="/" component={Main} />
        <Route path="/login/callback" component={LoginCallback} />
      </Suspense>
      <div>
        <button className="getrec">get recommendation</button>
        <button className="lucky-btn ml-3">I am Feeling Lucky</button>
      </div>
    </div>
  </React.Fragment>
)

export default App
