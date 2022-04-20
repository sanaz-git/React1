import React from 'react'

const Weather = ({allInfo}) => {
  return (
    <div>
      <ul>
        <li>
          <h1>{allInfo}</h1>

        </li>
      </ul>   
    </div>
  )
}

export default Weather