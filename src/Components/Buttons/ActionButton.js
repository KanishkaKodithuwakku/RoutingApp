import React from "react";
import classNames from "classnames";

const ActionButton = ({
  id,
  btnText,
  btnType = "primary",
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

  return (
    <div className="col-auto">
      <button
        type={type}
        className={buttonClasses}
        onClick={(e) => handleOnClick(e)}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ActionButton;
