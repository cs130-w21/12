import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { withOktaAuth } from '@okta/okta-react'
import { withRouter } from 'react-router'

class LoginButton extends Component {
  state = {
    authenticated: null,
    user: null,
    menuAnchorEl: null
  }

  componentDidUpdate() {
    this.checkAuthentication()
  }

  componentDidMount() {
    this.checkAuthentication()
  }

  async checkAuthentication() {
    const authenticated = this.props.authState.isAuthenticated
    if (authenticated !== this.state.authenticated) {
      const user = await this.props.authService.getUser()
      this.setState({ authenticated, user })
    }
  }

  login = () => this.props.authService.login('/')
  logout = () => {
    this.handleMenuClose()
    this.props.authService.logout('/')
  }

  handleProfileClicked = () => {
    this.handleMenuClose()
    this.props.history.push('/profile')
  }

  handleMenuOpen = event => this.setState({ menuAnchorEl: event.currentTarget })
  handleMenuClose = () => this.setState({ menuAnchorEl: null })

  render() {
    const { authenticated, user, menuAnchorEl } = this.state

    if (authenticated === null) return null
    if (!authenticated) return <Button color="inherit" onClick={this.login}>Login / Sign Up</Button>

    const menuPosition = {
      vertical: 'top',
      horizontal: 'right'
    }

    return (
      <div>
        <IconButton onClick={this.handleMenuOpen} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={menuPosition}
          transformOrigin={menuPosition}
          open={!!menuAnchorEl}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleProfileClicked}>
            <ListItemText
              primary="Profile Page"
              secondary={user && user.name}
            />
          </MenuItem>
          <MenuItem onClick={this.logout}>
            <ListItemText
              primary="Logout"
            />
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

LoginButton.propTypes = {
  authState: PropTypes.object,
  authService: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(withOktaAuth(LoginButton))
