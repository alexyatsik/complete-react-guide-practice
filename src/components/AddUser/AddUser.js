import {useState} from "react";
import {Card} from "../UI/Card";

import styles from './AddUser.module.css';

function AddUser(props) {
  const [userNameInput, setUserNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const onChangeUsernameHandler = (event) => {
    setUserNameInput(event.target.value);
  }

  const onChangeAgeHandler = (event) => {
    setAgeInput(event.target.value);
  }

  const clearInputFields = () => {
    setAgeInput('');
    setUserNameInput('');
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const addedUserData = {
      id: Math.random(),
      name: userNameInput,
      age: ageInput
    }

    if (parseInt(addedUserData.age) <= 0 || parseInt(addedUserData.age) > 150) {
      props.errorCode(1);
      props.showModal(true);
      clearInputFields();
      return;
    } else if (addedUserData.age.trim() === '' || addedUserData.name.trim() === '') {
      props.errorCode(2);
      props.showModal(true);
      clearInputFields();
      return;
    }

    props.onAddUser(addedUserData);
    clearInputFields();
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.inputs}>
          <div className={styles['input-block']}>
            <label>Username:</label>
            <input type="text" name="name" value={userNameInput} onChange={onChangeUsernameHandler} />
          </div>
          <div className={styles['input-block']}>
            <label>Age:</label>
            <input type="number" value={ageInput} onChange={onChangeAgeHandler} />
          </div>
        </div>
        <button type="submit">Add user</button>
      </form>

    </Card>
  );
}

export {AddUser};