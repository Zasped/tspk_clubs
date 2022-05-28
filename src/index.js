import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './assets/style/main.scss';
import {BrowserRouter} from "react-router-dom";
import Store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = new Store();

export const Context = createContext({store})

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context.Provider value={{store}}>
                <App/>
            </Context.Provider>
        </BrowserRouter>
    </React.StrictMode>
);

