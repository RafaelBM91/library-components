import React from "react";
import PropTypes from 'prop-types';
import { Label, Track, Input } from "./styled";

export const Switch = ({
    update,
    colorGround,
    colorSpinet,
    colorSpinetActive,
    size
}) => {
  const [engine, setEngine] = React.useState(update);

  const changeState = checked => {
    update(checked);
    setEngine(checked);
  };

  return (
    <Label
      colorGround={colorGround}
      size={size}
    >
      <Input
        type="checkbox"
        onChange={event => changeState(event.target.checked)}
        checked={engine}
        size={size}
      />
      <Track
        active={engine}
        colorSpinet={colorSpinet}
        colorSpinetActive={colorSpinetActive}
        size={size}
      />
    </Label>
  );
};

Switch.propTypes = {
  update: PropTypes.func.isRequired,
  colorGround: PropTypes.string,
  colorSpinet: PropTypes.string,
  colorSpinetActive: PropTypes.string,
  size: PropTypes.number
};

Switch.defaultProps = {
  colorGround: 'lightgray',
  colorSpinet: 'gray',
  colorSpinetActive: 'orange',
  size: 1.5
};
