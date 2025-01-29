import React, { useContext } from 'react'
import { TutorContext } from '../contextApi/TutorContext'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

const PrivetRoute = ({ children }) => {

    const { user, loader } = useContext(TutorContext)

    // find location
    const location = useLocation()

    if (loader) {
        return  <Loader ></Loader>
    }
    if (user?.email) {
        return children
    }
    // navigate to pathname or default path location
    return <Navigate state={location.pathname} to="/login" ></Navigate>

}

export default PrivetRoute
