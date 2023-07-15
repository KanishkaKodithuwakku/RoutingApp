import React from "react";

const Input = ({
  colClass = "col-auto",
  exClass = "",
  dataType = "text",
  labelText,
  plaseHolder = "text here",
  value = "",
  handleOnchange = () => {},
}) => {
  return (
    <div className={`${colClass} ${exClass}`}>
      {labelText && <label>{labelText}</label>}
      <input
        type={dataType}
        className="form-control"
        placeholder={plaseHolder}
        value={value}
        onChange={handleOnchange}
      />
    </div>
  );
};

export default Input;
