import React, {useEffect, useState} from 'react';
import styles from './cardslist.css';
import {Card, IPostData} from "./Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

interface IPostsItemData {
    data: {
        id: number,
        author_fullname?: string,
        created_utc?: number,
        thumbnail?: string,
        title?: string,
        url?: string,
    }
}

export function CardsList() {
    const token = useSelector<RootState>(state => state.token.token);
    const [posts, setPosts] = useState<IPostsItemData[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');

    useEffect(() => {
        if (!token) return;

        async function load() {
            try {
                setLoading(true);
                setErrorLoading('');

                const {data: {data: {children}}} = await axios.get('https://oauth.reddit.com/rising/', {
                    headers: {
                        Authorization: `bearer ${token}`,
                    }
                });
                setPosts(children);
            } catch (error) {
                setErrorLoading(String(error));
            }

            setLoading(false);
        }

        load();

    }, [token]);

    const cardsListData = posts.map((postItemData: IPostsItemData) => {
        return {
            id: postItemData.data.id,
            postUrl: postItemData.data.author_fullname ?? '',
            postDate: postItemData.data.created_utc ? new Date(postItemData.data.created_utc * 1000).toLocaleDateString("ru-RU") : '',
            postPreviewUrl: postItemData.data.thumbnail ?? '',
            postDescription: postItemData.data.title ?? '',
            user: {
                name: postItemData.data.author_fullname ?? '',
                avatar: 'http://via.placeholder.com/150/000/fff/?text=ДГ',
                url: postItemData.data.url ?? ''
            }
        }
    });

    return (
        <>
            {cardsListData.length === 0 && !loading && !errorLoading && (<div>нет постов...</div>)}
            {loading && (<div>загрузка...</div>)}
            {errorLoading && (<div>{errorLoading}</div>)}
            <ul className={styles.cardsList}>
                {cardsListData.map((post: IPostData) => (
                    <Card postData={post} key={post.id}/>
                ))}
            </ul>
        </>

    );
}

