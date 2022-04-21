import React from 'react';

const Weather = ({ allInfo }) => {
  return (
    <div className="allInfo">
      <ul>
        <li>
          <h2>
            {allInfo.name}, {allInfo.sys.country}
          </h2>
          <h3>{allInfo.weather[0].main}</h3>
          <p className="des">{allInfo.weather[0].description}</p>
          <p>temp_min: {Math.round(allInfo.main.temp_min - 273)} &#8451;</p>
          <p>temp_max: {Math.round(allInfo.main.temp_max - 273)} &#8451;</p>
          <p>
            lon: {allInfo.coord.lon.toFixed(2)} , lat:
            {allInfo.coord.lat.toFixed(2)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Weather;
