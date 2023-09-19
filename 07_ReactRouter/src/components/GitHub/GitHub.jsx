import React, { useEffect, useState } from 'react'


function GitHub() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.github.com/users/singhshivam583`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])
                       
    return (
        
      <div className='flex flex-wrap items-center flex text-white bg-gray-600 p-4 m-4 text-2xl border-orange-700 border-4 rounded-2xl'> 
        <img className='w-52 h-52 center rounded-full border-orange-700 border-2' src={data.avatar_url} alt='Git-Profile-Avatar' />
        <div className='items-start mx-10 my-12 '>
            <b>Name:</b> {data.name}<br/>
            <b>Bio:</b> {data.bio}<br/>
            <b>Followers:</b> {data.followers} <b>Following:</b> {data.following}<br/>
            <p><b>Github:</b> <a href='https://github.com/singhshivam583' target='_blank'><i>Visit Profile</i></a></p>
        </div>
      </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
        const response = await fetch(`https://api.github.com/users/singhshivam583`)
        return response.json()
}
