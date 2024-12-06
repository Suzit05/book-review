import React, { useContext } from 'react'
import Login from './Login'
import { AuthContext } from '../Context/AuthContext'


const PrivateRoutes = ({ children }) => {
    const { isloggedin } = useContext(AuthContext)
    console.log(isloggedin)
    return (
        <div>
            {isloggedin ? children : <Login />}
        </div>
    )
}

export default PrivateRoutes