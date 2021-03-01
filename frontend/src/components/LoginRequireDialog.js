import React from 'react'
import PropTypes from 'prop-types'
import { useOktaAuth } from '@okta/okta-react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

/**
 * LoginRequireDialog is used to prompt users to log in when they are in unauthenticated state and attempt to access parts of the app that requires authentication.
 * LoginRequireDialog is used by RecipeCard component and RecipeCollection page, and becomes visible when unauthenticated users attempt to bookmark a recipe
 */
const LoginRequireDialog = (props) => {
  const { open, setOpen } = props
  const { authService } = useOktaAuth()

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleClickLogin = () => {
    authService.login('/')
  }

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Sign in to enable recipe bookmarks?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          You need to sign in to bookmark a recipe.
      </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color='primary'>
          Cancel
      </Button>
        <Button onClick={handleClickLogin} color='primary' autoFocus>
          Sign in / Sign up
      </Button>
      </DialogActions>
    </Dialog>
  )
}

LoginRequireDialog.propTypes = {
  /* a bool flag to control whether the dialog is open or closed */
  open: PropTypes.bool,
  /* a function to set the dialog open control flag */
  setOpen: PropTypes.func
}

export default LoginRequireDialog
