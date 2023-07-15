import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      fullname: "Kalhari Gallage",
      email: "kalhari@gmail.com",
      gender: "Female",
      address: "Passara",
      zipcode: "0453",
    },
    {
      id: uuidv4(),
      fullname: "Kanishka Bandara Kodithuwakku",
      email: "kanishka@gmail.com",
      gender: "Male",
      address: "Badulla",
      zipcode: "0123",
    },
  ]);

  const contextValue = { users, setUsers };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
