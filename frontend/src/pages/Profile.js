import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="main-wrapper mt-5">
          <AccountCircleIcon style={{ fontSize: '100px' }} />
          <div className="sub-wrapper mt-3">
            <div className="section">
              <label className="my-2">First Name</label>
              <input className="profile-input" value="Jackie" readOnly />
            </div>
            <div className="section">
              <label className="my-2">Phone Number</label>
              <input className="profile-input" value="123456789" readOnly />
            </div>
            <div className="section">
              <label className="my-2">Preference</label>
              <input className="profile-input" value="Vegetarian" readOnly />
            </div>
            <div className="section">
              <label className="my-2">Last Name</label>
              <input className="profile-input" value="Chen" readOnly />
            </div>
            <div className="section">
              <label className="my-2">Email</label>
              <input className="profile-input" value="123456789@gmail.com" readOnly />
            </div>
          </div>
          <button className="submit-btn">
            Save Changes
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
