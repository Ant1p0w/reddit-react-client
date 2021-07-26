import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";
import {preventDefault} from "../../../../utils/react/preventDefault";

interface ITitleProps {
    postUrl: string,
    postDescription: string
}

export function Title(props: ITitleProps) {
    const {postUrl, postDescription} = props;
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <h2>
            <a href="#post" className={styles.postLink} onClick={preventDefault(() => {
                setIsModalOpened(true)
            })}>
                {postDescription}
            </a>

            {isModalOpened && (
                <Post onClose={() => {
                    setIsModalOpened(false)
                }}/>
            )};
        </h2>
    );
}
