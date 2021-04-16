import React from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";

const mockPostData = {
    postUrl: '#post-url',
    postDate: '15.04.2010 16:30',
    postPreviewUrl: 'http://via.placeholder.com/250/000/fff/',
    postDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolor dolores sapiente similique suscipit tempora tempore? Ad dignissimos ea ex illo impedit, in itaque iusto sint. Dolorem, et porro.',
    user: {
        name: 'Дмитрий Гриши',
        avatar: 'http://via.placeholder.com/150/000/fff/?text=ДГ',
        url: '#user-url'
    }
};

export function CardsList() {
    return (
        <ul className={styles.cardsList}>
            <Card postData={mockPostData}/>
            <Card postData={mockPostData}/>
        </ul>
    );
}

