import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import { LoginCallback } from '@okta/okta-react'
import logo from './assets/logo.png'
import AppHeader from './components/AppHeader'
import Main from './pages/Main'

const App = () => (
  <React.Fragment>
    <AppHeader />
    <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '5%' }}>
      <img src={logo} alt="Logo" width="200" height="200" />
      <Route exact path="/" component={Main} />
      <Route path="/login/callback" component={LoginCallback} />
    </div>
  </React.Fragment>
)

export default App
