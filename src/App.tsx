import React from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./context/tokenContext";

function AppComponent() {
    const [token] = useToken();
    const {Provider} = tokenContext;

    return (
        <Provider value={token}>
            <Layout>
                <Header/>
                <Content>
                    <CardsList/>
                </Content>
            </Layout>
        </Provider>
    )
}

export const App = hot(AppComponent)
