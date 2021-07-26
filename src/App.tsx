import React from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {UserContextProvider} from "./context/userContext";
import {PostContextProvider} from "./context/postsContext";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store";
import {useToken} from "./hooks/useToken";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export const App = hot(AppComponent)
