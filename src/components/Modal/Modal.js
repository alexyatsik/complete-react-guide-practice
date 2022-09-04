import {Card} from "../UI/Card";

import styles from './Modal.module.css';

function Modal(props) {
  return (

        <div className={`${styles.modal} ${props.isValidInput ? styles.hidden : ''}`}>
            <Card>
                <span>Modal error</span>
            </Card>
        </div>
  );
}

export {Modal};