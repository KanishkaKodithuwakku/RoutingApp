import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContextProvider from "./Context/UsersContext";
import AddNewUser from "./Pages/Users/AddNewUser";
import AllUsers from "./Pages/Users/AllUsers";
import Login from "./Pages/Login/Login";
import UserDetails from "./Pages/Users/UserDetails";


const App = () => {
  return (
    <>
      <div className="container">
        <Router>
          <UserContextProvider>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-user" component={AddNewUser} />
              <Route exact path="/user-details/:id" component={UserDetails} />
              <Route exact path="/all-users" component={AllUsers} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </UserContextProvider>
        </Router>
      </div>
    </>
  );
};

export default App;
