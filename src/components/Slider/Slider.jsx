import Slider from '@mui/material/Slider';
import './Slider.css';


function valuetext(value) {
    return `${value}%`;
  }

export default function CustomSlider({color}){
    return (
        <Slider
            defaultValue={50}
            valueLabelFormat={valuetext}
            step={1}
            valueLabelDisplay="auto"
            sx={{
                color: color,
                }}
            />
    );
}

