import React from 'react'
 import { useDispatch } from 'react-redux'
 import authService from '../../appwrite/auth'
 import { logout } from '../../store/authSlice'


function LogoutBtn() {

    const dispatch = useDispatch()
    const handleLogoutClick=()=>{
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
        <button 
        className='inline-block px-6 py2 duration-200 hover:bg-blue-10 rounded-full'
        >
            Logout
        </button>
  )
}

export default LogoutBtn
