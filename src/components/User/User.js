import {Card} from '../UI/Card';

import styles from './User.module.css';

function User(props) {
    return (
        <li>
            <Card>
                <div className={styles.user}>
                    <span>Name: {props.name}</span>
                    <span>Age: {props.age}</span>
                </div>
            </Card>
        </li>
    );
}

export {User};