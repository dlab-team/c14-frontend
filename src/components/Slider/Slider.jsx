import Slider from '@mui/material/Slider';
import './Slider.css';
import { useState } from 'react';
import useFormStore from '@/store/useFormStore';

function valuetext(value) {
    return `${value}%`;
  }

export default function CustomSlider({color,phrase}){
  const setOpossitePoliticalResult = useFormStore(state => state.setOpossitePoliticalResult);
  const opossitePoliticalResult = useFormStore(state => state.opossitePoliticalResult);
  const [value, setValue] = useState(50);
  
  function handleChange(e, newValue) {
    const index = opossitePoliticalResult.findIndex(item => item.id === phrase.id);

    if (index !== -1) {
      const updatedResults = [...opossitePoliticalResult];
      updatedResults[index] = { percentage: newValue, id: phrase.id, text: phrase.text };
      setOpossitePoliticalResult(updatedResults);
    } else {
      setOpossitePoliticalResult([
        ...opossitePoliticalResult,
        { percentage: newValue, id: phrase.id, text: phrase.text },
      ]);
    }

    setValue(newValue);
  }


  return (
    <Slider
      value={value}
      valueLabelFormat={valuetext}
      step={1}
      valueLabelDisplay="on"
      sx={{
        color: color,
      }}
      onChange={handleChange}
    />
  );
}

