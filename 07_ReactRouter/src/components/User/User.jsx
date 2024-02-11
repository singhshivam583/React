import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

const { userid } = useParams()

  return (
    <div className=' text-center p-2 bg-orange-700 text-white border-2 border-black m-4'> User: {userid} </div>
  )
}

export default User 
