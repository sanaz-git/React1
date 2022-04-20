import React, { useState } from "react";
import Search from "./Search"


const City = () => {
  const [city, setCity ]= useState('');

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if((setCity(data.message)) == city.name) {
          return data

        }
        else{
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
 
  return (
    <div>
      <form>
          <input type="text" placeholder="Choose a City" value={city.value} onChange={e => setCity(e.target.value)} />
          <button type="submit" value="Search"> search</button>
        </form>     
    </div>
  );
};

export default City;