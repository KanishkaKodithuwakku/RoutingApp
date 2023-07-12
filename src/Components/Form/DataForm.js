import React from "react";
import DataButton from "../Button/DataButton";
import DataInput from "./DataInput";

const DataForm = ({ FormTitle,children, handleSubmit }) => {
   
  return (
    <>
      <h1>{FormTitle}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        {children}
      </form>
    </>
  );
};

DataForm.defaultProps = {
  FormTitle: "Add New Data",
    handleSubmit: () => {}
};
export default DataForm;
