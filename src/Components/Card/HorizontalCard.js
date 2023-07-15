import React from "react";
import avatar from "./avatar.jpg";
import Avatar from "./Avatar";

const HorizontalCard = ({
  title,
  children,
  image,
  gender,
  id,
  handleCardClick,
}) => {
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
      <div
        className="card mb-3"
        style={{ maxWidth: `540px` }}
        onClick={(e) => handleCardClick(id)}
      >
        <div className="row g-0">
          <Avatar title={title} type={gender === 'Female'? 'F':''} />
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
