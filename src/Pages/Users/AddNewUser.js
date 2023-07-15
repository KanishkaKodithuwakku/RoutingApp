import React, { useContext } from "react";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
import ActionButton from "../../Components/Buttons/ActionButton";
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
      <Form handleSubmit={handleformSubmit}>
        <Input
          labelText={`Full Name`}
          plaseHolder={`Full Name`}
          value={fullname}
          handleOnchange={(e) => setfullname(e.target.value)}
        />
        <Input
          labelText={`Address`}
          plaseHolder={`Adderss`}
          value={address}
          handleOnchange={(e) => setAddress(e.target.value)}
        />

        <Input
          labelText={`Email`}
          plaseHolder={`Email`}
          value={email}
          handleOnchange={(e) => setEmail(e.target.value)}
        />

        <Input
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

        <ActionButton type={`submit`} btnText={`Submit`} exclass={`mt-4`} />
      </Form>
    </>
  );
};
export default AddNewUser;
