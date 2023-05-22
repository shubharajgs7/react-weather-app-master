import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({ lightTransparentBox: {
  backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  border: '1px solid #ccc', 
  padding: '20px',
  borderRadius:"40px",
  margin:"10px",
  width:"350px"
}})
const WeatherBox = (props) => {
  const classes = useStyles()
  const getDay = (date) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekday[new Date(date).getDay()];
  };

  return (
    <div className={classes.lightTransparentBox}>
      <h1>{props.date ? getDay(props.date) : ""}</h1>
      <img
        src={
          props.icon
            ? require(`../images/${props.icon}.svg`)
            : require("../images/01d.svg")
        }
        alt="sun"
      />
      <span>{Math.round(props.temp - 273.15)}°C</span>
    </div>
  );
};

export default WeatherBox;
