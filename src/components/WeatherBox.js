import React from 'react';
import './WeatherBox.css';

const WeatherBox = (props) => {
  const getDay = (date) => {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[new Date(date).getDay()];
  };

  return (
    <div className='weather-box'>
      <h1>{props.date ? getDay(props.date) : ''}</h1>
      <img
        src={props.icon ? require(`../images/${props.icon}.svg`) : require('../images/01d.svg')}
        alt='sun'
      />
      <span className='temp'>{Math.round(props.temp - 273.15)}°C</span>
    </div>
  );
};

export default WeatherBox;
