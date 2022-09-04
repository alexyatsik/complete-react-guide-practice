import {User} from '../User/User';
import {Card} from "../UI/Card";

import styles from './UsersList.module.css';

function UsersList(props) {
    if (props.usersCatalogue.length === 0) {
        return <ul />;
    }

    return (
        <Card>
          <ul className={styles.list}>
              {props.usersCatalogue.map(user =>
                  <User
                      key={user.id}
                      name={user.name}
                      age={user.age}
                  />
              )}
          </ul>
        </Card>
    );
}

export {UsersList};