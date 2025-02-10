import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
// import "./app/styles/index.sass"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/*<StoreProvider>*/}
            <App/>
        {/*</StoreProvider>*/}
    </React.StrictMode>
)
