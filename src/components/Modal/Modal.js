import {Card} from "../UI/Card";

import styles from './Modal.module.css';

function Modal(props) {
    const errorCodes = {
        1: 'Age should be bigger then 0 and smaller than 150',
        2: 'Inputs should be filled up'
    }

    const errorCode = (code) => {
        return errorCodes[code];
    }

    const closeHandler = () => {
        props.showModalHandler(false);
    }

  return (
        <div className={`${styles.modal} ${!props.visibility ? styles.hidden : ''}`} onClick={closeHandler}>
            <Card>
                <div>
                    <h3>Error</h3>
                    <span className={styles.message}>{errorCode(props.errorCode)}</span>
                </div>
                <button onClick={closeHandler}>OK</button>
            </Card>
        </div>
  );
}

export {Modal};