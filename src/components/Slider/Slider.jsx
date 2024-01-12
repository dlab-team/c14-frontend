import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import './Slider.css';

function valueText(value) {
  return `${value}%`;
}

export default function CustomSlider({ color = '#66B947', value = 50, handleChange }) {
  return (
    <Slider
      value={value}
      valueLabelFormat={valueText}
      step={1}
      valueLabelDisplay="on"
      sx={{
        color: color,
      }}
      onChange={handleChange}
    />
  );
}

CustomSlider.propTypes = {
  color: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
};
