import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {tokenRequestAsync} from "../store/token/actions";

export function useToken() {
    const token = useSelector<RootState, string>(state => state.token.token);
    const loading = useSelector<RootState, boolean>(state => state.token.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!token){
            dispatch(tokenRequestAsync());
        }
    }, [token]);

    return {token, loading};
}
