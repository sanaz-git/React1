import React from "react";

const  Button = ({getDogPhoto}) => {

  return (
    <div>
      <button className= "btn" onClick={getDogPhoto}> Get a friend!</button>
    </div>
  )

}

export default Button