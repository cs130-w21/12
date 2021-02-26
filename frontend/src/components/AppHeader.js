import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Link
} from '@material-ui/core'
import LoginButton from './LoginButton'
import { useOktaAuth } from '@okta/okta-react'

const AppHeader = () => {
  const history = useHistory()
  const { authState } = useOktaAuth()

  const handleClickMain = () => {
    history.push('/')
  }

  const handleClickMyRecipes = () => {
    history.push('/my_recipes')
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
        {authState.isAuthenticated &&
          <Typography variant='body1' color='inherit' style={{ fontFamily: 'Roboto Condensed' }}>
            <Link component='button' color='inherit' onClick={handleClickMyRecipes}>
              My Recipes
          </Link>
          </Typography>
        }
        <LoginButton />
      </Toolbar>
    </AppBar >
  )
}

export default AppHeader
