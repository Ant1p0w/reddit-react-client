import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card, IPostData} from "./Card";
import {postsContext} from "../context/postsContext";

interface IPostsItemData {
    author_fullname?: string,
    created_utc?: number,
    thumbnail?: string,
    title?: string,
    url?: string,
}

export function CardsList() {
    const postsData = useContext(postsContext);

    const cardsListData = postsData.map((postItemData: IPostsItemData) => {
        return {
            postUrl: postItemData.author_fullname ?? '',
            postDate: postItemData.created_utc ? new Date(postItemData.created_utc * 1000).toLocaleDateString("ru-RU") : '',
            postPreviewUrl: postItemData.thumbnail ?? '',
            postDescription: postItemData.title ?? '',
            user: {
                name: postItemData.author_fullname ?? '',
                avatar: 'http://via.placeholder.com/150/000/fff/?text=ДГ',
                url: postItemData.url ?? ''
            }
        }
    })

    const cardsList = cardsListData.map((post: IPostData) =>
        <Card postData={post}/>
    );

    return (
        <ul className={styles.cardsList}>
            {cardsList}
        </ul>
    );
}

