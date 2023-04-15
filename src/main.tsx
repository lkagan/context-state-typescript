import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { PostContextProvider } from "./PostContext";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <PostContextProvider>
            <App/>
        </PostContextProvider>
    </React.StrictMode>,
)
