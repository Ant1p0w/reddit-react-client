import React from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./context/tokenContext";
import {UserContextProvider} from "./context/userContext";
import {PostContextProvider} from "./context/postsContext";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    const [token] = useToken();

    return (
        <Provider store={store}>
            <tokenContext.Provider value={token}>
                <UserContextProvider>
                    <PostContextProvider>
                        <Layout>
                            <Header/>
                            <Content>
                                <CardsList/>
                            </Content>
                        </Layout>
                    </PostContextProvider>
                </UserContextProvider>
            </tokenContext.Provider>
        </Provider>
    )
}

export const App = hot(AppComponent)
