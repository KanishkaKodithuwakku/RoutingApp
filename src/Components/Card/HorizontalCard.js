import React from "react";
import avatar from "./avatar.jpg";

const HorizontalCard = ({ title, children, image, gender }) => {
  const roundDivStyle = {
    borderRadius: "50%",
    backgroundColor: gender === "Female" ? "#FF9B9B" : "#468B97",
    color: "#fff",
    textAlign: "center",
    lineHeight: "72px",
    padding: "8px 17px",
    fontSize: "53px",
  };
  const getAvatarInitial = () => {
    return title.charAt(0).toUpperCase();
  };
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: `540px` }}>
        <div className="row g-0">
          <div className="col-md-2">
            {image ? (
              <img
                src={image}
                className="img-fluid rounded-start"
                alt="Avatar"
              />
            ) : (
              <div className="avatar-initial pt-3 pl-5">
                <div style={roundDivStyle}>{getAvatarInitial()}</div>
              </div>
            )}
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
