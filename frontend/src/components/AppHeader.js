import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'
import LoginButton from './LoginButton'

const AppHeader = () => (
  <AppBar position='static' style={{ background: '#FFFFFF', color: 'rgba(235, 73, 23, 0.72)' }}>
    <Toolbar>
      <Typography variant='h4' color='inherit' style={{ fontFamily: 'Roboto Condensed' }}>
        Cuisine Machine
      </Typography>
      <div style={{ flex: 1 }} />
      <LoginButton />
    </Toolbar>
  </AppBar>
)

export default AppHeader
