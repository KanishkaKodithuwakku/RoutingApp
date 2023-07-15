import React, { createContext, useState } from "react";
import { usersArray } from "../Data/Data";


export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [users, setUsers] = useState(usersArray);

  const contextValue = { users, setUsers };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
