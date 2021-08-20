import React, {useEffect} from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {PostContextProvider} from "./context/postsContext";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
    useEffect(() => {

    }, []);

    return (
        <Provider store={store}>
            <PostContextProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <CardsList/>
                    </Content>
                </Layout>
            </PostContextProvider>
        </Provider>
    )
}

export const App = hot(AppComponent)
