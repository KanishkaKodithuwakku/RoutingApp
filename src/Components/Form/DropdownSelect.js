import React from "react";

const DropdownSelect = ({
  labelText,
  colClass = "col-auto",
  exClass = "mt-3",
  handleOnchange = () => {},
  options = [],
}) => {
  return (
    <div className={`${colClass} ${exClass}`}>
      {labelText && <label>{labelText}</label>}
      <select className="form-select" onChange={handleOnchange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
