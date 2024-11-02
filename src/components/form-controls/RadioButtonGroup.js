import React from "react";
import RadioButton from "./RadioButton"

const RadioButtonGroup = ({ options, selectedOption, onChange }) => {
  return (
    <div>
      {options?.map((option, index) => (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          checked={option.value === selectedOption}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
