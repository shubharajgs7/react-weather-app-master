import React from "react";

const MainWeatherWindow = (props) => {
  const Title = props.city ? null : <h1 className="title">Weather Forecast</h1>;

  return (
    <div>
      <div>
        {Title}
        <img
          src={
            props.data
              ? require(`../images/${props.data.icon}.svg`)
              : require("../images/01d.svg")
          }
          alt="sun"
        />
        <div className="today">
          <span>Today</span>
          <h1>{props.city}</h1>
          <p>
            Temperature: {props.data ? Math.round(props.data.temp - 273.15) : 0}
            °C
          </p>
          <p>{props.data ? props.data.weather_desc.toLowerCase() : ""}</p>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default MainWeatherWindow;
