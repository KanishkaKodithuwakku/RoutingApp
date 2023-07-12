import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import AddNewUser from "./Pages/Users/AddNewUser";
import AllUsers from "./Pages/AllUsers";
import Login from "./Pages/Login/Login";
import UserDetails from "./Pages/Users/UserDetails";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/new-user" component={AddNewUser} />
        <Route exact path="/user-details/:id" component={UserDetails} />
        <Route exact path="/all-users" component={AllUsers} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
