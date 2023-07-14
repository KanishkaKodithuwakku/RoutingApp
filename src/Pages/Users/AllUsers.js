import React, { useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UsersContext';
import HorizontalCard from '../../Components/Card/HorizontalCard';
import SearchBar from '../../Components/Form/SearchBar';


const AllUsers = () => { 

  const { users, handleSearch, searchText } = useContext(UserContext);

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
          <h3 className="mt-5">Users</h3>
          <p onClick={handleLogout} style={{ cursor: "pointer" }}>
            Hello {loginStatus && storedUsername.toLocaleLowerCase()} | Logout
          </p>

          <div className="row mb-5">
            <div className="col-sm-5">
              <SearchBar handleSearch={handleSearch} value={searchText} />
            </div>
          </div>

          {users.map((user) => (
            <HorizontalCard key={user.id} title={user.fullname} />
          ))}
        </>
      );

}
export default AllUsers;
