import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({
    children, 
    authentication = true,
}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authSatus = useSelector((state)=> state.authSatus);
    useEffect(() => {
        // todo make it easy

        // if (authSatus===true) {
        //     navigate('/')
        // } else if(authSatus===false){
        //     navigate('/login')
        // }

        // let authValue = authSatus === true ? true : false

        if (authentication && authSatus !== authentication) {
            navigate("/login")
        }else if(!authentication && authSatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authSatus, navigate, authentication])

  return (
    <div>Protected</div>
  )
}