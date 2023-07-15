import React from "react";
import Avatar from "./Avatar";

const HorizontalCard = ({
  title,
  children,
  gender,
  id,
  handleCardClick,
}) => {
  
  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: `540px` }}
        onClick={(e) => handleCardClick(id)}
      >
        <div className="row g-0">
          <Avatar title={title} gender={gender} />
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
