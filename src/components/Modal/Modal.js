import {Card} from "../UI/Card";

import styles from './Modal.module.css';

function Modal(props) {
  return (

        <div className={`${styles.modal} ${!props.visibility ? styles.hidden : ''}`}>
            <Card>
                <span className={styles.message}>Modal error</span>
            </Card>
        </div>

  );
}

export {Modal};