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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const addedUserData = {
      name: userNameInput,
      age: ageInput
    }

    props.onAddUser(addedUserData);

    setAgeInput('');
    setUserNameInput('');
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
            <input type="number" min="1" max="150" step="1" value={ageInput} onChange={onChangeAgeHandler} />
          </div>
        </div>
        <button type="submit">Add user</button>
      </form>

    </Card>
  );
}

export {AddUser};