import Slider from '@mui/material/Slider';
import './Slider.css';
import { useState } from 'react';


function valuetext(value) {
    return `${value}%`;
  }

export default function CustomSlider({color}){
      
    function handleChange(e) {
        setValue(e.target.value);
      }

    const [value, setValue] = useState(50);
      
   
      return (
        <Slider
            value={value}
            valueLabelFormat={valuetext}
            step={1}
            valueLabelDisplay="auto"
            sx={{
                color: color,
                }}
            onChange={handleChange}
            />
    );
}

