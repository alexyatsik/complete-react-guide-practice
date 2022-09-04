import { useState } from 'react';
import { AddUser } from "./components/AddUser/AddUser";
import { UsersList } from "./components/UsersList/UsersList";

import styles from './App.module.css';

function App() {
    const [usersCatalogue, setUsersCatalogue] = useState([]);

    const onAddUserHandler = (userData) => {
        setUsersCatalogue(prevState => {
            return [userData, ...prevState]
        });
    };

    return (
        <div className={styles.app}>
            <AddUser onAddUser={onAddUserHandler} />
            <UsersList usersCatalogue={usersCatalogue}/>
        </div>
    );
}

export default App;
