import React from 'react'

const DataButton = ({ btnText, btnType, type, handleOnclick, exclass}) => { 

    return (
      <>
        <div className="col-auto">
          <button
            type={type}
            className={`btn btn-${btnType} mb-3 ${exclass}`}
            onClick={(e) => handleOnclick(e)}
          >
            {btnText}
          </button>
        </div>
      </>
    );
}

DataButton.defaultProps = {
  btnType: "primary",
  type: "submit",
  handleOnclick: () => {},
};

export default DataButton;
