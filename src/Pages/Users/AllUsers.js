import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UsersContext";
import HorizontalCard from "../../Components/Card/HorizontalCard";
import SearchBar from "../../Components/Form/SearchBar";
import DropdownSelect from "../../Components/Form/DropdownSelect";
import ActionButton from "../../Components/Buttons/ActionButton";
import Input from "../../Components/Form/Input";
import Form from "../../Components/Form/Form";
import Container from "../../Components/Layouts/Container ";

const AllUsers = () => {
  const {
    users,
    handleformSubmit,
    handleSearch,
    searchText,
    fullname,
    setfullname,
    address,
    setAddress,
    email,
    setEmail,
    zipcode,
    setZipcode,
    gender,
    setGender,
    handleDelete,
    toastContainer,
    toast,
  } = useContext(UserContext);

  const history = useHistory();
  const storedUsername = localStorage.getItem("username");
  const loginStatus = localStorage.getItem("loginStatus");

  if (!loginStatus) {
    history.push("/login");
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  const handleCardClick = (userId) => {
    history.push(`/user-details/${userId}`);
  };

  useEffect(() => {
    if (users.length === 0) {
      toast.error("No user. Please create a new user");
    }
  }, [users]);

  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  return (
    <>
      {toastContainer}
      <h3 className="mt-5">Users</h3>
      <p onClick={handleLogout} style={{ cursor: "pointer" }}>
        Hello {loginStatus && storedUsername.toLocaleLowerCase()} | Logout
      </p>

      <Container title={`Add New Users`}>
        <Form handleSubmit={handleformSubmit} FormTitle={`Add New User`}>
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

          <DropdownSelect
            labelText={`Gender`}
            value={gender}
            handleOnchange={(e) => setGender(e.target.value)}
            options={options}
          />

          <ActionButton type={`submit`} btnText={`Submit`} exclass={`mt-4`} />
        </Form>
      </Container>

      <Container title={`Search Users By name and Gender`}>
        <SearchBar handleSearch={handleSearch} value={searchText} />
      </Container>

      <Container title={`All Users`}>
        {users.map((user) => (
          <HorizontalCard
            key={user.id}
            {...user}
            title={user.fullname}
            image={false}
            handleCardClick={handleCardClick}
          >
            <ActionButton
              sm={`btn-sm`}
              id={user.id}
              type={`button`}
              btnText={`Delete`}
              btnType={`danger`}
              handleOnclick={() => handleDelete(user.id)}
            />
          </HorizontalCard>
        ))}
      </Container>
    </>
  );
};
export default AllUsers;
