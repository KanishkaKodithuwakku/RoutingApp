import React from "react";
import Input from "./Input";

const SearchBar = ({ handleSearch, value }) => {
  return (
    <>
      <Input
        handleOnchange={(e) => handleSearch(e.target.value)}
        value={value}
      />
    </>
  );
};

export default SearchBar;
