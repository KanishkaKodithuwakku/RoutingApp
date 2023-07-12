import React, { useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UsersContext';


const AllUsers = () => { 

  const {users} = useContext(UserContext);


    const history = useHistory();
    const storedUsername = localStorage.getItem("username");
    const loginStatus = localStorage.getItem("loginStatus");

    if (!loginStatus) { 
        history.push('/login');
    }

    const handleLogout = () => { 
        localStorage.clear();
        history.push('/login')
    }
      return (
        <>
          <h1 className="mt-5">
            Hello {loginStatus && storedUsername.toLocaleLowerCase()}
          </h1>
          <p onClick={handleLogout} style={{ cursor: "pointer" }}>
            Logout
          </p>

          <ul>
            {users.map((user) => <li>{ user.email}</li>)}
         </ul>
        </>
      );

}
export default AllUsers;
