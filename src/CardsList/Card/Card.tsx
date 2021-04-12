import React from 'react';
import styles from './card.css';
import {CardPreview} from "./CardPreview";
import {CardMenu} from "./CardMenu";
import {CardControls} from "./CardControls";

export function Card() {
    return (
        <li className={styles.card}>
            <a className={styles.cardLink} href="#card-1"/>
            <CardPreview/>
            <CardMenu/>
            <CardControls/>
        </li>
    );
}
