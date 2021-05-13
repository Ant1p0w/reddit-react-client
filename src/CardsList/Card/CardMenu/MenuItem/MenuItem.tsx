import React from 'react';
import styles from './menuitem.css';

export interface IMenuItem {
    icon: string,
    label: string,
}

interface IMenuItemProps {
    item: IMenuItem,
    postId: string
}

export function MenuItem(props: IMenuItemProps) {
    const postId = props.postId;
    const item = props.item;
    
    return (
        <li className={styles.menuItem} onClick={() => {
            console.log(postId)
        }}>
            <div className={styles.menuItemIcon}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={item.icon} fill="#999999"/>
                </svg>
            </div>
            <span>{item.label}</span>
        </li>
    )
}
