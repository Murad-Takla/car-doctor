import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/MyContext';
import { Form, Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext,)
    const location = useLocation()
    // console.log(location)   // This provides the current location object, which can be used to determine where the user was trying to go before being redirected to the login page.

    if (loader) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRouter;