import { useState } from 'react';
import { AddUser } from "./components/AddUser/AddUser";
import { UsersList } from "./components/UsersList/UsersList";
import { Modal } from "./components/Modal/Modal";

import styles from './App.module.css';

function App() {
    const [usersCatalogue, setUsersCatalogue] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [errorCode, setErrorCode] = useState('Not defined');

    const showModalHandler = (state) => {
      setModalVisibility(state);
    }

    const onAddUserHandler = (userData) => {
        setUsersCatalogue(prevState => {
            return [userData, ...prevState]
        });
    };

    const errorCodeGetter = (code) => {
        setErrorCode(code);
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
            <AddUser onAddUser={onAddUserHandler} showModal={showModalHandler} errorCode={errorCodeGetter}/>
            <UsersList usersCatalogue={usersCatalogue} onClickListHandler={onClickListHandler} errorCode={errorCodeGetter}/>
            <Modal visibility={modalVisibility} showModalHandler={showModalHandler} errorCode={errorCode}/>
        </div>
    );
}

export default App;
