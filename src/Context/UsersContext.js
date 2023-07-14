import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useDataFilter from "../hook/DataFilter";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [fullname, setfullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [gender, setGender] = useState('');
  const [searchText, setSearchText] = useState('');
  

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

  //custom hook
  const filteredUsers = useDataFilter(users, searchText, "Male");
 

  useEffect(() => {
    if (filteredUsers.length > 0) {
      console.log("Set users at context");
      setUsers(filteredUsers);
    }
  }, [filteredUsers]);
 

  console.log("Context");
  console.log(filteredUsers);
  

  const handleSearch = (searchTag) => { 
    setSearchText(searchTag);
  }

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
      
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const contextValue = {
    users,
    handleformSubmit,
    handleSearch,
    setSearchText,
    searchText,
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
