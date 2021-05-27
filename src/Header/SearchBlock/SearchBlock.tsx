import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";

export function SearchBlock() {
    return (
        <div className={styles.searchBlock}>
            <div className={styles.inputBox}>
                <input className={styles.inputField} type="text" placeholder="Поиск..."/>
            </div>
            <UserBlock/>
        </div>
    );
}
