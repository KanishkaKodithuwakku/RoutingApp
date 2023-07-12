import React from "react";

const DataSelect = ({
  children,
  labelText,
  colClass,
  exClass,
  handleOnchange,
}) => {
  return (
    <>
      <div className={`${colClass} ${exClass}`}>
        {labelText && <label className="">{labelText}</label>}
        <select className="form-select" onChange={handleOnchange}>
          {/* <option selected>Open this select menu</option> */}
          {children}
        </select>
      </div>
    </>
  );
};

DataSelect.defaultProps = {
  colClass: "col-auto",
  exClass: "mt-3",
  plaseHolder: "text here",
  dataType: "text",
  value: "",
  handleOnchange: () => {},
};
export default DataSelect;
