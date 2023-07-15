import React from "react";
import classNames from "classnames";

const ActionDelete = ({
  id,
  btnText,
  btnType = "danger",
  type = "submit",
  handleOnClick,
  exclass,
  sm,
}) => {
  const buttonClasses = classNames(
    "btn",
    `btn-${btnType}`,
    "mb-3 mt-4",
    exclass,
    sm
    );
    
    const handleClick = () => {
      handleOnClick(id);
    };

  return (
    <div className="col-auto">
      <button
        type={type}
        className={buttonClasses}
        onClick={handleClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ActionDelete;
