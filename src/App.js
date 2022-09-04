import { useState } from 'react';
import { AddUser } from "./components/AddUser/AddUser";
import { UsersList } from "./components/UsersList/UsersList";
import { Modal} from "./components/Modal/Modal";

import styles from './App.module.css';

function App() {
    const [usersCatalogue, setUsersCatalogue] = useState([]);
    const [validInput, setValidInput] = useState(true);

    const onAddUserHandler = (userData) => {
        checkInput(userData);
        if (!validInput) {
            return;
        }

        setUsersCatalogue(prevState => {
            return [userData, ...prevState]
        });
    };

    const checkInput = (input) => {
        if (parseInt(input.age) <= 0 || !isNaN(parseInt(input.name))) {
            console.log('here')
            setValidInput(false);
            console.log(validInput)
        }
        console.log(validInput)
    }

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
            <Modal isValidInput={validInput} />
        </div>
    );
}

export default App;
