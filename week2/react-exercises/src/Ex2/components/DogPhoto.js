import React from "react";

//dogPhoto
const DogPhoto = ({ dogPhotos }) => {
  return (
    <>
      <img src={dogPhotos} alt="dog" />
    </>
  );
};

export default DogPhoto;
