import React, { useState } from "react";

const CityInput = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async (e) => {
    e.persist();
    const eventKey = e.which ? e.which : e.keyCode;
    const city = e.target.value;

    // check if input contains only letters after Enter was pressed
    if (eventKey === 13) {
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
        setIsLoading(true);

        if (await props.makeApiCall(city)) {
          e.target.placeholder = "Enter a City...";
        } else {
          e.target.placeholder = "City was not found, try again...";
        }
      } else {
        e.target.placeholder = "Please enter a valid city name...";
      }

      setIsLoading(false);
      e.target.value = "";
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter a City..."
      onKeyPress={onClickHandler}
    />
  );
};

export default CityInput;
