import styles from './Square.module.css'
import { useState } from 'react'

const Square = (props) => {

    const [value, setValue] = useState("")

    function handleClick() {
        setValue('X')
    }

    return (
        <button onClick={handleClick} className={styles.square}>{value}</button>
    );
}

export default Square