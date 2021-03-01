import { useOktaAuth } from '@okta/okta-react'
import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import '../styles/Profile.css'

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
    <div className="container-fluid mb-3">
      <div className="profile-wrapper mt-5">
        <AccountCircleIcon style={{ fontSize: '100px' }} />
        {userInfo && (
          <React.Fragment>
            <div className="profile-sub-wrapper mt-5 mb-3">
              <div className="profile-sect">
                <label className="my-2 profile-label">Full Name</label>
                <span className="my-2">{userInfo.name}</span>
              </div>
              <div className="profile-sect">
                <label className="my-2 profile-label">Email</label>
                <span className="my-2">{userInfo.email}</span>
              </div>
              <div className="profile-sect">
                <label className="my-2 profile-label">Email Verified</label>
                <span className="my-2">{userInfo.email_verified.toString()}</span>
              </div>
              <div className="profile-sect">
                <label className="my-2 profile-label">Area</label>
                <span className="my-2">{userInfo.zoneinfo}</span>
              </div>
            </div>
         </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Profile
