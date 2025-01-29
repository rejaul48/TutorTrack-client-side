import axios from 'axios'
import { useContext, useEffect } from 'react'
import { TutorContext } from '../contextApi/TutorContext'
import { useNavigate } from 'react-router-dom'

const axiosInstance = axios.create({
    baseURL: 'https://server-side-sable-sigma.vercel.app/',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { userLogOut } = useContext(TutorContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, err => {
            if (err.status === 401 || err.status === 403) {
                userLogOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(err)
        })
    }, [])


    return axiosInstance
}

export default useAxiosSecure
