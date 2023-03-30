import { useState } from 'react';
import styles from './Square.module.css'

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button
            className={styles.square}
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default Square