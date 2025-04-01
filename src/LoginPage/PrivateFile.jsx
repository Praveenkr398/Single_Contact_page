import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

function PrivateFile() {
    const {user,logOut} = useContext(AuthContext)
  return (
    <div className='page' >
        <h1 >Welcome page</h1>
    <h2>Hey! <span>{user.username}</span></h2>
    <h4>password  <span>{user.password}</span></h4>
    <button onClick={logOut} className='out'>Log out</button>
    </div>
  )
}

export default PrivateFile