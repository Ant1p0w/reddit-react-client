import React from 'react';
import styles from './icon.css';

interface ITextProps {
    size?: number;
    color?: string;
    pathD: string
}

export function Icon(props :ITextProps){
    const {size = 16, pathD, color = '#999999'} = props;
    return(
        <svg className={styles.icon} width={size + 'px'} height={size + 'px'} viewBox={'0 0 ' + size + ' ' + size} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={pathD} fill={color}/>
        </svg>
    );
};
