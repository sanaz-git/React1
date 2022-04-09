import React, { useState } from 'react'

const friendApp = () => {
  const[friend,setFriend] =useState({})

  const getFriend = async() => {
    const response = await fetch('https://www.randomuser.me/api?results=1')
    const responseData = await response.json()
    setFriend(responseData)
  }
  getFriend()
 
  return(
    <div className='friend'>
       
    </div>
  )
 
}


export default friendApp