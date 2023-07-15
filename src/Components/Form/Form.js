import React from "react";

const Form = ({children, handleSubmit }) => {
   
  return (
      <form className="row g-3" onSubmit={handleSubmit}>
        {children}
      </form>
  );
};

Form.defaultProps = {
  FormTitle: "Add New Data",
  handleSubmit: () => {},
};
export default Form;
