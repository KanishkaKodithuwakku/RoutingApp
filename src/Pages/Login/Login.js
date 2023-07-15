import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
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
      <Form FormTitle={`Login`} handleSubmit={handleLogin}>
        <Input
          labelText={`Username`}
          handleOnchange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          labelText={`Password`}
          dataType={`password`}
          handleOnchange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <ActionButton btnText={`Login`} exclass={`mt-4`} />
      </Form>
    </>
  );
};
export default Login;
