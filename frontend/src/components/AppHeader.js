import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Link
} from '@material-ui/core'
import LoginButton from './LoginButton'

const AppHeader = () => {
  const history = useHistory()

  function handleClickMain() {
    history.push('/')
  }

  return (
    <AppBar position='static' style={{ background: '#FFFFFF', color: 'rgba(235, 73, 23, 0.72)' }}>
      <Toolbar>
        <Typography variant='h4' color='inherit' style={{ fontFamily: 'Roboto Condensed' }}>
          <Link component='button' color='inherit' onClick={handleClickMain}>
            Cuisine Machine
          </Link>
        </Typography>
        <div style={{ flex: 1 }} />
        <LoginButton />
      </Toolbar>
    </AppBar >
  )
}

export default AppHeader
