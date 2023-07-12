import React from "react";

const DataInput = ({
  colClass,
  exClass,
  dataType,
  labelText,
  plaseHolder,
  value,
  handleOnchange,
}) => {
  return (
    <>
      <div className={`${colClass} ${exClass}`}>
        {labelText && <label className="">{labelText}</label>}
        <input
          type={dataType}
          className="form-control"
          placeholder={plaseHolder}
          value={value}
          onChange={handleOnchange}
        />
      </div>
    </>
  );
};

DataInput.defaultProps = {
  colClass: "col-auto",
  exClass: "",
  plaseHolder: "text here",
  dataType: "text",
  value: "",
  handleOnchange: () => {},
};

export default DataInput;
