import React from "react";
import avatar from "./avatar.jpg";

const HorizontalCard = ({ title ,children}) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: `540px` }}>
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src={avatar}
              className="img-fluid rounded-start"
              alt="Avatar"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HorizontalCard;
