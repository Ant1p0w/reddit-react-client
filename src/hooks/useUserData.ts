import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {tokenContext} from "../context/tokenContext";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData(){
    const [data, setData] = useState<IUserData>({});
    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: {
                Authorization: `bearer ${token}`,
            }
        })
        .then((response) => {
            const userData = response.data;
            setData({name:userData.name, iconImg: userData.icon_img });
        })
        .catch(console.log);

    }, [token]);

    return [data];
}
