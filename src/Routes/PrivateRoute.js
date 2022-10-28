import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext
    if (user && user.uid) {
        return children
    }
    return (<Navigate to={'/login'}></Navigate>);
};

export default PrivateRoute;