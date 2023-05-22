import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  style: {
    backgroundColor: "white",
    borderRadius: "30px",
    width: "500px",
    top: (props) => (props.city ? "-220px" : "10px"),
  },
});
const CityInput = (props) => {
  const classes = useStyles(props);

  const onClickHandler = async (e) => {
    e.persist();
    const eventKey = e.which ? e.which : e.keyCode;
    const city = e.target.value;

    // check if input contains only letters after Enter was pressed
    if (eventKey === 13) {
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
        if (await props.makeApiCall(city)) {
          e.target.placeholder = "Enter a City...";
        } else {
          e.target.placeholder = "City was not found, try again...";
        }
      } else {
        e.target.placeholder = "Please enter a valid city name...";
      }

      e.target.value = "";
    }
  };

  return (
    <TextField
      className={classes.style}
      sx={{
        "& fieldset": { border: "none" },
      }}
      placeholder="Enter City Name..."
      variant="outlined"
      onKeyPress={onClickHandler}
    />
  );
};

export default CityInput;
