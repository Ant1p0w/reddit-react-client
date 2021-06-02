import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {tokenContext} from "../context/tokenContext";

interface IResponseDataItem{
    data: object,
    kind: string,
}

export function usePostsData(){
    const [data, setData] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {
                Authorization: `bearer ${token}`,
            }
        })
        .then((response) => {
            const postsData = response.data.data.children.map((item: IResponseDataItem) => item.data);
            console.log(response.data.data.children);
            setData(postsData);
        })
        .catch(console.log);

    }, [token]);

    return [data];
}
