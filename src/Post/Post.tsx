import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import {CommentsList} from "../CommentsList";

interface IPost {
    onClose?: () => void
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        document.body.classList.add('modal-opened');

        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.body.classList.remove('modal-opened');
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const node = document.getElementById('react-modal');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modalWrap}>
            <div className={styles.modal} ref={ref}>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, molestias?</h2>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur esse et harum laboriosam magnam
                        nam quibusdam. Blanditiis debitis delectus ipsa.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur esse et harum laboriosam magnam
                        nam quibusdam. Blanditiis debitis delectus ipsa.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur esse et harum laboriosam magnam
                        nam quibusdam. Blanditiis debitis delectus ipsa.</p>
                </div>
                <CommentsList/>
            </div>
        </div>
    ), node);
}
