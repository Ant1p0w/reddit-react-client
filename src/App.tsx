import React from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
                content
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent)
