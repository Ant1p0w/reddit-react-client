import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";

interface ITitleProps {
    postUrl: string,
    postDescription: string
}

export function Title(props: ITitleProps) {
    const {postUrl, postDescription} = props;
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <h2>
            <a href="#post" className={styles.postLink} onClick={() => {
                setIsModalOpened(true)
            }}>
                {postDescription}
            </a>

            {isModalOpened && (
                <Post/>
            )};
        </h2>
    );
}
