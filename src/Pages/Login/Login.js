import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DataForm from "../../Components/Form/DataForm";
import DataInput from "../../Components/Form/DataInput";
import ActionButton from "../../Components/Buttons/ActionButton";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const loginStatus = localStorage.getItem("loginStatus");
  if (loginStatus) {
    history.push("/all-users");
  }
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123") {
      localStorage.setItem("username", username);
      localStorage.setItem("loginStatus", true);
      history.push("/all-users");
    } else {
      toast.error("Invalid Username or Password!");
    }
  };

  return (
    <>
      <ToastContainer />
      <DataForm FormTitle={`Login`} handleSubmit={handleLogin}>
        <DataInput
          labelText={`Username`}
          handleOnchange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <DataInput
          labelText={`Password`}
          dataType={`password`}
          handleOnchange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <ActionButton btnText={`Login`} exclass={`mt-4`} />
      </DataForm>
    </>
  );
};
export default Login;
