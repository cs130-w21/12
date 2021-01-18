import './App.css'
import React from 'react'
import logo from './assets/logo.png'

function App () {
  return (
    <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center' }}>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%' }}>
        <img src={logo} alt="Logo" width="75%" height="75%" />
        <input style={{ borderRadius: '5px' }} placeholder="Enter Ingredients..." />
      </form>
    </div>
  )
}

export default App
