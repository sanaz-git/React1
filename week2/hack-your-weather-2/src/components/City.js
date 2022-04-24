import React, { useState } from 'react';
import Weather from './Weather';

const City = () => {
  const [city, setCity] = useState('');
  const [allInfo, setAllInfo] = useState();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError(false);

    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    setIsPending(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('city not founded');
        }
        return response.json();
      })
      .then((data) => {
        setAllInfo(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        setAllInfo(null);
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
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {allInfo && <Weather allInfo={allInfo} />}
    </div>
  );
};

export default City;
