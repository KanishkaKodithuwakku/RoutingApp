import React from 'react'
import DataInput from './DataInput';


const SearchBar = ({ handleSearch,value }) => {
  return (
    <>
      <DataInput
        handleOnchange={(e) => handleSearch(e.target.value)}
        value={value}
      />
    </>
  );
};

export default SearchBar;