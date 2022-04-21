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
        setAllInfo(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <input
          className="input"
          placeholder="&#xF002; Search City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
      {allInfo && <Weather allInfo={allInfo} />}
    </div>
  );
};

export default City;
