import React from "react";
import classes from "./Select.module.css";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value}
    onChange = {event => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key = {option.value} value={option.value}>{option.sort}</option>
      ))}
    </select>
  );
};

export default Select;
