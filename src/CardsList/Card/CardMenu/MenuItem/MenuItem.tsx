import React from 'react';
import styles from './menuitem.css';
import {Text} from "../../../../Text";
import classNames from "classnames";
import {Icon} from "../../../../Icon";

export interface IMenuItem {
    icon: string,
    label: string,
    mobile?: boolean
}

interface IMenuItemProps {
    item: IMenuItem,
    postId: string
}

export function MenuItem(props: IMenuItemProps) {
    const postId = props.postId;
    const item = props.item;
    const classes = classNames(
        styles.menuItem,
        {[styles.showOnMobile]: props.item.mobile},
    );

    return (
        <li className={classes} onClick={() => {
            console.log(postId)
        }}>
            <div className={styles.menuItemIcon}>
                <Icon pathD={item.icon} size={16}/>
            </div>
            <Text size={14} mobileSize={12}>{item.label}</Text>
        </li>
    )
}
