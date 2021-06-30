import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';

export function Post() {
    const node = document.getElementById('react-modal');
    if(!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, molestias?</h2>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur esse et harum laboriosam magnam
                    nam quibusdam. Blanditiis debitis delectus ipsa.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur esse et harum laboriosam magnam
                    nam quibusdam. Blanditiis debitis delectus ipsa.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur esse et harum laboriosam magnam
                    nam quibusdam. Blanditiis debitis delectus ipsa.</p>
            </div>
        </div>
    ), node);
}
