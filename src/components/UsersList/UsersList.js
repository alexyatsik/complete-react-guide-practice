import {User} from '../User/User';
import {Card} from "../UI/Card";

import styles from './UsersList.module.css';

function UsersList(props) {
  return (
    <Card>
      <ul className={styles.list}>
          {props.usersCatalogue.map(user =>
              <User
                name={user.name}
                age={user.age}
              />
          )}
      </ul>
    </Card>
  );
}

export {UsersList};