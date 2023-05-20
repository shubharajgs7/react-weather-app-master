import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  input: {
    top: (props) => (props.city ? '-380px' : '-20px'),
    width: '600px',
    display: 'inline-block',
    padding: '10px 0px 10px 30px',
    lineHeight: '120%',
    position: 'relative',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '20px',
    transition: 'all 0.5s ease-out',
  },
  loading: {
    background: '#ffffff url("../images/loading.gif") 97% center no-repeat',
    backgroundSize: '25px 25px',
  },
});

const CityInput = (props) => {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles(props);

  const onKeyPressHandler = async (e) => {
    e.persist();
    const eventKey = e.which ? e.which : e.keyCode;
    const cityName = e.target.value;

  {
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(cityName)) {
        setIsLoading(true);

        if (await props.makeApiCall(cityName)) {
          e.target.placeholder = 'Enter a City...';
        } else {
          e.target.placeholder = 'City was not found, try again...';
        }
      } else {
        e.target.placeholder = 'Please enter a valid city name...';
      }

      setIsLoading(false);
      e.target.value = '';
    }
  };

  return (
    
    <TextField className={`${classes.input} ${isLoading ? classes.loading : ''}`} label="Enter a City..." variant="outlined" />
    // <input
    //   className={`${classes.input} ${isLoading ? classes.loading : ''}`}
    //   type='text'
    //   placeholder='Enter a City...'
    //   onKeyPress={onKeyPressHandler}
    // />

  );
};

export default CityInput;
