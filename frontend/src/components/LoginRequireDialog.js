import React from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const LoginRequireDialog = (props) => {
  const { open, setOpen } = props

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
  open: PropTypes.bool,
  setOpen: PropTypes.func
}

export default LoginRequireDialog
