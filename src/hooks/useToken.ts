import {useEffect, useState} from "react";

export function useToken() {
    const [token, setToken] = useState('');

    const listenToHash = () => {
        let urlHash = window.location.hash.substring(1);
        let queryVars = urlHash.split('&');
        let token = '';

        for (let queryVar of queryVars) {
            console.log(queryVar);
            let pair = queryVar.split('=');

            if (pair[0] === 'access_token') {
                token = pair[1];
            }
        }

        setToken(token);
    };

    useEffect(() => {
        listenToHash();
    }, []);

    return [token]
}
