import React, { useState } from "react";
import Search from "./search";

const Weather = () => {
  const [weatherCondition, setWeatherCondition] = useState({});

  const FetchData = () => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((responseData) => responseData.json())
      .then((data) => {
        setWeatherCondition(data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Search FetchData={FetchData} />
    </div>
  );
};

export default Weather;