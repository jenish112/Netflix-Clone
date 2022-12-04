import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to='/login' />
    } else {
        return children;
    }
};

export default ProtectedRouter