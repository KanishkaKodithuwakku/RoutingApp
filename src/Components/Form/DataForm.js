import React from "react";

const DataForm = ({ FormTitle,children, handleSubmit }) => {
   
  return (
    <>
      <h3>{FormTitle}</h3>
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
