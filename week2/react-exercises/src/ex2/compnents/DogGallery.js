import React,{useState} from "react";

const DogGallery () => {
  [dogPhoto,setDogPhoto] = useState([])

  const getDogPhoto = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then (responseData => responseData.json)
    .then (data =>{setDogPhoto(data.results[0])})
    .catch(err => {console.log(err)}) 
  
}
return(
  <div>
    <Button getDogPhoto={getDogPhoto} />
   
  </div>
)
}