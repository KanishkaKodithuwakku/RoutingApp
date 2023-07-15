import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UsersContext";

const UserDetails = () => {
  const { users } = useContext(UserContext);
    const { id: userId } = useParams();
    const history = useHistory();
    
       if (!userId || isNaN(Number(userId))) {
         history.push("/all-users");
       }

  const findUserById = (userId) => {
    const user = users.find((user) => user.id === Number(userId));
    return user;
  };

  const user = findUserById(userId);

  return (
    <>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Name: {user.fullname}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          {/* Render other user details */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </>
  );
};

export default UserDetails;
