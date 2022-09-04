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

    const onClickListHandler = (event) => {
        const clickedItemId = event.target.closest('li').getAttribute('data-id');
        const filteredCatalogue = usersCatalogue.filter(user => {
           return parseFloat(user.id) !== parseFloat(clickedItemId);
        });
        setUsersCatalogue(filteredCatalogue);
    }

    return (
        <div className={styles.app}>
            <AddUser onAddUser={onAddUserHandler} />
            <UsersList usersCatalogue={usersCatalogue} onClickListHandler={onClickListHandler} />
        </div>
    );
}

export default App;
