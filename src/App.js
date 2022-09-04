import { useState } from 'react';
import { AddUser } from "./components/AddUser/AddUser";
import { UsersList } from "./components/UsersList/UsersList";

function App() {
    const [usersCatalogue, setUsersCatalogue] = useState([]);

    const onAddUserHandler = (userData) => {
        setUsersCatalogue(prevState => {
            return [userData, ...prevState]
        });
    };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList usersCatalogue={usersCatalogue}/>
    </div>
  );
}

export default App;
