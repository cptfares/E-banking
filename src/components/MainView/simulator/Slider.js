import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Slider } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
];



function valueLabelFormat(value) {
  console.log(value)
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();
  console.log(valuetext)

function valuetext(value) {

  return value;
  
}

  return (
    <div className={classes.root} >
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
       
        defaultValue={5}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        max={10}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}
