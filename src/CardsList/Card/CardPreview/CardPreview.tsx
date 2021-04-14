import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
    return (
        <div className={styles.preview}>
            <img className={styles.previewImage}
                 src='https://cdn.dribbble.com/users/903897/screenshots/15431702/media/6531edef72cbcbba9ad924419a9b8b04.png?compress=1&resize=1600x1200'/>
        </div>
    );
}
