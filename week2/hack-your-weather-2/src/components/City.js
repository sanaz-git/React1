import React, { useState } from 'react';
import Weather from './Weather';

const City = () => {
  const [city, setCity] = useState('');
  const [allInfo, setAllInfo] = useState();

  console.log(allInfo);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.message == city.name) {
          return setAllInfo(data);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Choose a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit"> search</button>
      </form>
      {/* <Weather allInfo={allInfo}/>    */}
    </div>
  );
};

export default City;
