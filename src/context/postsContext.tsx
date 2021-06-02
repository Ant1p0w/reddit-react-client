import React from 'react';
import {usePostsData} from "../hooks/usePostsData";

export const postsContext = React.createContext([]);

export function PostContextProvider({children}: {children : React.ReactNode}){
    const [data] = usePostsData();

    return(
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    )
}
