import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((responseData) => responseData.json())
      .then((data) => {
        setDogPhotos(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      {/* <DogPhoto dogPhotos={dogPhotos} />
      {dogPhotos.map((dogPhoto, index) => 
        <DogPhoto key={index} dogPhoto={dogPhoto} />
      )} */}
      <DogPhoto dogPhotos={dogPhotos} />
    </div>
  );
};

export default DogGallery;
