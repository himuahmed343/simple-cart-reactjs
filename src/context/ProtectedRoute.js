import React from 'react';
import { Navigate } from 'react-router';
import { useUserAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth()
    if (!user) {
        return <Navigate to="/" />
    }
    return children
        ;
};

export default ProtectedRoute;
