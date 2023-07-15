import React from "react";

const Container = ({ title, children }) => {
  return (
    <div className="container-wrapper p-4 border rounded mt-2 mb-2">
      {title && <h4 className="container-title mb-4">{title}</h4>}
      <div className="container-content">{children}</div>
    </div>
  );
};

export default Container;
