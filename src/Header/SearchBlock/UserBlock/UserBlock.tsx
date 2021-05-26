import React from 'react';
import styles from './userblock.css';
import {Text, EColor} from "../../../Text";
import {AnonIcon} from "../../../Icons";

interface IUserBLockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({ avatarSrc, username}: IUserBLockProps) {
  return (
      <a className={styles.userBox} href="https://www.reddit.com/api/v1/authorize?client_id=Y6MsrNpfzbpo8A&response_type=TYPE&
    state=RANDOM_STRING&redirect_uri=http://localhost:3000/&scope=read submit identity">
        <div className={styles.avatarBox}>
          {avatarSrc
              ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
              : <AnonIcon/>
          }
        </div>
        <div className={styles.username}>
          <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Anon'}</Text>
        </div>
      </a>
  );
}
