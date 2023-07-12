import React, { useContext, useState } from "react";
import DataForm from "../../Components/Form/DataForm";
import DataInput from "../../Components/Form/DataInput";
import DataButton from "../../Components/Button/DataButton";
import DataSelect from "../../Components/Form/DataSelect";
import { UserContext } from "../../Context/UsersContext";
const AddNewUser = () => {

  const {
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
  } = useContext(UserContext);


  return (
    <>
      <DataForm handleSubmit={handleformSubmit}>
        <DataInput
          labelText={`Full Name`}
          plaseHolder={`Full Name`}
          value={fullname}
          handleOnchange={(e) => setfullname(e.target.value)}
        />
        <DataInput
          labelText={`Address`}
          plaseHolder={`Adderss`}
          value={address}
          handleOnchange={(e) => setAddress(e.target.value)}
        />

        <DataInput
          labelText={`Email`}
          plaseHolder={`Email`}
          value={email}
          handleOnchange={(e) => setEmail(e.target.value)}
        />

        <DataInput
          labelText={`ZipCode`}
          plaseHolder={`ZipCode`}
          value={zipcode}
          handleOnchange={(e) => setZipcode(e.target.value)}
        />

        <DataSelect
          labelText={`Gender`}
          value={gender}
          handleOnchange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </DataSelect>

        <DataButton type={`submit`} btnText={`Submit`} exclass={`mt-4`} />
      </DataForm>
    </>
  );
};
export default AddNewUser;
