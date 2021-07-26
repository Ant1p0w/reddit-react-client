import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, setToken} from "../store";

export function useToken() {
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch();

    const listenToHash = () => {
        let urlHash = window.location.hash.substring(1);
        let queryVars = urlHash.split('&');
        let token = '';

        for (let queryVar of queryVars) {
            let pair = queryVar.split('=');

            if (pair[0] === 'access_token') {
                token = pair[1];
            }
        }

        dispatch(setToken(token));
    };

    useEffect(() => {
        listenToHash();
    }, []);

    return [token]
}
