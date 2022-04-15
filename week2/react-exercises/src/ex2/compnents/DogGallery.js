import React, { useState } from 'react'
import Button from './Button'
import DogPhoto from './DogPhoto'


const DogGallery = () => {
  const[dogPhotos,setDogPhotos] =useState([])

  const getDogPhotos = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then (responseData => responseData.json())
    .then (data =>{setDogPhotos(data.message)})
    .catch(err => {console.log(err)})

  }
 
  return(
    <div>
      <Button getDogPhoto={getDogPhotos} />
       <DogPhoto dogPhoto={dogPhotos.map(dogPhoto => {dogPhoto})}  />
    </div>
  )
 
}

export default DogGallery