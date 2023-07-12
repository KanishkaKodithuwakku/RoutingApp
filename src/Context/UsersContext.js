import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [gender, setGender] = useState("");

  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      fullname: "Kanishka Bandara Kodithuwakku",
      email: "kanishka@gmail.com",
      gender: "Male",
      address: "Badulla",
      zipcode: "0123",
    },
    {
      id: uuidv4(),
      fullname: "Kalhari Gallage",
      email: "kalhari@gmail.com",
      gender: "Female",
      address: "Passara",
      zipcode: "0453",
    },
  ]);

  const handleformSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      fullname: fullname,
      email: email,
      gender: gender,
      address: address,
      zipcode: "0258",
      };
      
      console.log(newUser);

    setUsers((prevUsers) => [...prevUsers, newUser]);
  
      console.log(users);
  };

  const contextValue = {
    users,
    handleformSubmit,
    fullname,
    setfullname,
    address,
    setAddress,
    zipcode,
    setZipcode,
    gender,
    setGender,
    email,
    setEmail,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserContextProvider;
