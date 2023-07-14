import React from 'react'

const DataButton = ({ id, btnText, btnType, type, handleOnclick, exclass,sm }) => {
  return (
    <>
      <div className="col-auto">
        <button
          type={type}
          className={`btn btn-${btnType} mb-3 ${exclass} ${sm}`}
          onClick={() => handleOnclick(id)}
        >
          {btnText}
        </button>
      </div>
    </>
  );
};

DataButton.defaultProps = {
  btnType: "primary",
  type: "submit",
  sm:'',
  handleOnclick: () => {},
};

export default DataButton;
