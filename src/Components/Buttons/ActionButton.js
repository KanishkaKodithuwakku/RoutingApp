import React from "react";
import classNames from "classnames";

const ActionButton = ({
  id,
  btnText,
  btnType = "primary",
  type = "submit",
  handleOnClick,
  exClass,
  sm,
}) => {
  const buttonClasses = classNames(
    "btn",
    `btn-${btnType}`,
    "mb-3",
    exClass,
    sm
  );

  return (
    <div className="col-auto">
      <button
        type={type}
        className={buttonClasses}
        onClick={() => handleOnClick(id)}
      >
        {btnText}
      </button>
    </div>
  );
};

export default ActionButton;
