import { useOktaAuth } from '@okta/okta-react'
import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import '../styles/Profile.css'
import { RecButton } from '../styles/styles'

const Profile = () => {
  const { authState, authService } = useOktaAuth()
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null)
    } else {
      authService.getUser().then(info => {
        setUserInfo(info)
      })
    }
  }, [authState, authService])

  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <div className="profile-wrapper mt-5">
          <AccountCircleIcon style={{ fontSize: '100px' }} />
          {userInfo && (
            <div className="profile-sub-wrapper mt-3 mb-3">
              <div className="profile-sect">
                <label className="my-2">User Name</label>
                <input className="profile-input" value="Jakin" readOnly />
              </div>
              <div className="profile-sect">
                <label className="my-2">Phone Number</label>
                <input className="profile-input" value="123456789" readOnly />
              </div>
              <div className="profile-sect">
                <label className="my-2">Preference</label>
                <input className="profile-input" value="Vegetarian" readOnly />
              </div>
              <div className="profile-sect">
                <label className="my-2">Email</label>
                <input className="profile-input" value="test@gmail.com" readOnly />
              </div>
            </div>
          )}

          <RecButton>
            Save Changes
          </RecButton>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
