import React from 'react';
import styles from './userlink.css';

export function UserLink() {
    return (
        <a href="#user-link" className={styles.userLink}>
            <div className={styles.avatar}>
                <img className={styles.avatarImage}
                     src="https://cdn.dribbble.com/users/803221/avatars/normal/c20484ece0f88ce6c8ddad5b4e662d8c.png"
                     alt="avatar"/>
            </div>
            <span className={styles.userName}>Дмитрий Гришин</span>
        </a>
    );
}
