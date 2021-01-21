import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Security } from '@okta/okta-react'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const oktaConfig = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: `${window.location.origin}/login/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID
}

ReactDOM.render(
  <BrowserRouter>
    <Security {...oktaConfig}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Security>
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) module.hot.accept()
