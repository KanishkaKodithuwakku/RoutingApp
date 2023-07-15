import React from "react";

const Avatar = ({ image, title, gender }) => {
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
    <div className="col-md-2">
      {image ? (
        <img src={image} className="img-fluid rounded-start" alt="Avatar" />
      ) : (
        <div className="avatar-initial pt-3 pl-5">
          <div style={roundDivStyle}>{getAvatarInitial()}</div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
